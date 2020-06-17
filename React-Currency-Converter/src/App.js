import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './components/CurrencyRow';

const BASE_API_URL = 'https://api.exchangeratesapi.io/latest';

function App() {

const [currencyOptions, setCurrencyOptions] = useState([]);
const [fromCurrency, setFromCurrency] = useState();
const [toCurrency, setToCurrency] = useState();
const [exchangeRate, setExchangeRate] = useState()
const [amount, setAmount] = useState(1);
const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

let toAmount, fromAmount;

if(amountInFromCurrency)
{
  fromAmount = amount;
  toAmount = amount * exchangeRate;
}
else
{
  toAmount = amount;
  fromAmount = amount / exchangeRate;
}


  useEffect(() => {
    fetch(BASE_API_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0];
      setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      setFromCurrency(data.base);
      setToCurrency(firstCurrency);
      setExchangeRate(data.rates[firstCurrency]);
    })
  }, []);

  //This useEffect will update amount every time you change it
  useEffect(() => {
    if(fromCurrency != null && toCurrency != null)
    {
      fetch(`${BASE_API_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  const onChangeFromAmountHandler = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  const onChangeToAmountHandler = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    //Since we have more elements (h1, CurrencyRow, etc.) we have to wrap it with (Fragment) or (<> </>)
    <Fragment>
      <h1>Converter</h1>
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={evt => setFromCurrency(evt.target.value)}
        onChangeAmount={onChangeFromAmountHandler}
        amount={fromAmount}
      />
      <div className="equals">=</div>
      <CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={evt => setToCurrency(evt.target.value)}
        onChangeAmount={onChangeToAmountHandler}
        amount={toAmount}
      />
    </Fragment>
  );
}

export default App;
