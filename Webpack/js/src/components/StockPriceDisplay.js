import React from 'react';
import StockHistoryDisplay from './StockHistoryDisplay.js';

const StockPriceDisplay = (props) => {

    const [stockData, setStockData] = React.useState({});

    React.useEffect(() => {
        //Call Stock and Set Stock Data
        props.stock.getStockPrice().then(priceData => {
            if(priceData instanceof Object)
            {
                setStockData({...priceData});
            }
            else
            {
                //String
                setStockData({error: priceData});
            }
        }).catch((error) => {
            setStockData({error: error});
        })
    }, [props.stock]); //<-- listening to the changes of the symbol entered

    //For Testing
    React.useEffect(() => {
        console.log("Stock Data has been changed");
        console.log(stockData);
    }, [stockData]);

    //Currency Formatter
    const currencyFormatter = (value) => {
        return (+value).toLocaleString('en-US', {
            style : 'currency',
            currency : 'USD'
        });
    }

    //If symbol input is not empty
    const isValidStock = () => {
        return props.stock.symbol !== "" && stockData.error === undefined;
    }

    //Five Days History
    const historyOnClickHandler = () => {
        props.stock.getStockFiveDayHistory()
        .then((priceDataWithHistory) => {
            setStockData({...priceDataWithHistory});
        }).catch((error) => {
            setStockData({error: error});
        });
    }

    //Display Symbol Information
    return <section className="stock-display">
                {isValidStock() ? //<-- ternary in this case we have to use <React.Fragment>
                    <React.Fragment>
                        <h2>Stock Viewr Information</h2>
                        <div className="details">Symbol: {stockData.symbol} </div>
                        <div className="details">Price: {currencyFormatter(stockData.price)} </div>
                        <div>
                            <button className="btn-history" onClick={historyOnClickHandler}>Previous 5 Days</button>
                        </div>
                        <div className="history">
                            {stockData.history &&
                               <StockHistoryDisplay history={stockData.history} smbl={stockData.symbol}/>
                            }
                        </div>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                        <p>No data Loaded</p>
                        {(props.stock.symbol !== "" && stockData.error) &&
                            <p style={{color:"red"}}>{stockData.error}</p>
                        }
                    </React.Fragment>
                }
            </section>
}

export default StockPriceDisplay;