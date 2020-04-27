//Imports
import React from 'react';
import ReactDOM from 'react-dom';

import StockSearchForm from './components/StockSearchForm.js';
import StockPriceDisplay from './components/StockPriceDisplay.js';
import {Stock} from './stock.js';

import '../../css/main.css';

//Application
const App = () =>
{
    const [stockSymbol, setStockSymbol] = React.useState("");

    React.useEffect(() => {
        console.log("New Stock Symbol is This");
        console.log(stockSymbol);
    }, [stockSymbol]);

    return <div>
        <h1>Stock Viewer App</h1>
        <StockSearchForm setStockCallback={setStockSymbol}/>
        <StockPriceDisplay stock={new Stock({symbol: stockSymbol})}/>
    </div>;
}

let reactContainer = document.querySelector("#react-container");

ReactDOM.render(<App/>, reactContainer);