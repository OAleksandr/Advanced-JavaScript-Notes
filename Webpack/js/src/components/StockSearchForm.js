import React from 'react';

const StockSearchForm = (props) => {

    const [stockSymbol, setStockSymbol] = React.useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.setStockCallback(stockSymbol);
    }

    const onChangeHandler = (event) => {
        setStockSymbol(event.target.value);
    }

    return <div>
        <h2>Stock Search Form</h2>
        <form className="frm symbol" onSubmit={onSubmitHandler}>
            <label htmlFor="symbol">Ticker Symbol</label>
            <input type="text" id="symbol" name="symbol" onChange={onChangeHandler} value={stockSymbol}/>
            <button type="submit">View</button>
        </form>
    </div>
}

export default StockSearchForm;