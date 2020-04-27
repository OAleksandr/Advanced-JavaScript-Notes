var StockHistoryDisplay = function StockHistoryDisplay(props) {
  React.useEffect(function () {
    console.log("History");
    console.log(props.history);
  }, [props.history]); //Currency Formatter

  var currencyFormatter = function currencyFormatter(value) {
    return (+value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  };

  return (
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement("h2", null, "Five Days History for ", props.smbl), props.history.map(function (fiveDays) {
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: "history-data",
          key: fiveDays.date
        },
        /*#__PURE__*/
        React.createElement("h4", null,
        /*#__PURE__*/
        React.createElement("strong", null, "Date: "), fiveDays.date),
        /*#__PURE__*/
        React.createElement("ul", null,
        /*#__PURE__*/
        React.createElement("li", null,
        /*#__PURE__*/
        React.createElement("strong", null, "Open: "), currencyFormatter(fiveDays.open)),
        /*#__PURE__*/
        React.createElement("li", null,
        /*#__PURE__*/
        React.createElement("strong", null, "Low: "), currencyFormatter(fiveDays.low)),
        /*#__PURE__*/
        React.createElement("li", null,
        /*#__PURE__*/
        React.createElement("strong", null, "High: "), currencyFormatter(fiveDays.high)),
        /*#__PURE__*/
        React.createElement("li", null,
        /*#__PURE__*/
        React.createElement("strong", null, "Close: "), currencyFormatter(fiveDays.close))))
      );
    })))
  );
};

export default StockHistoryDisplay;