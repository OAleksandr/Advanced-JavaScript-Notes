import React from 'react';

const StockHistoryDisplay = (props) => {

    React.useEffect(() => {
        console.log("History");
        console.log(props.history);
    },[props.history]);

     //Currency Formatter
     const currencyFormatter = (value) => {
        return (+value).toLocaleString('en-US', {
            style : 'currency',
            currency : 'USD'
        });
    }

    return <div>
                <React.Fragment>
                    <h2>Five Days History for {props.smbl}</h2>
                            {props.history.map(fiveDays => 
                            <div className="history-data" key={fiveDays.date}>
                                <h4><strong>Date: </strong>{fiveDays.date}</h4>
                                <ul>
                                    <li><strong>Open: </strong>{currencyFormatter(fiveDays.open)}</li>
                                    <li><strong>Low: </strong>{currencyFormatter(fiveDays.low)}</li>
                                    <li><strong>High: </strong>{currencyFormatter(fiveDays.high)}</li>
                                    <li><strong>Close: </strong>{currencyFormatter(fiveDays.close)}</li>
                                </ul>
                            </div>
                            )}
                </React.Fragment>
            </div>
}

export default StockHistoryDisplay;