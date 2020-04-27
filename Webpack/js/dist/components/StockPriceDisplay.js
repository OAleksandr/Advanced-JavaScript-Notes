function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import StockHistoryDisplay from './StockHistoryDisplay.js';

var StockPriceDisplay = function StockPriceDisplay(props) {
  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stockData = _React$useState2[0],
      setStockData = _React$useState2[1];

  React.useEffect(function () {
    //Call Stock and Set Stock Data
    props.stock.getStockPrice().then(function (priceData) {
      if (priceData instanceof Object) {
        setStockData(_objectSpread({}, priceData));
      } else {
        //String
        setStockData({
          error: priceData
        });
      }
    })["catch"](function (error) {
      setStockData({
        error: error
      });
    });
  }, [props.stock]); //<-- listening to the changes of the symbol entered
  //For Testing

  React.useEffect(function () {
    console.log("Stock Data has been changed");
    console.log(stockData);
  }, [stockData]); //Currency Formatter

  var currencyFormatter = function currencyFormatter(value) {
    return (+value).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }; //If symbol input is not empty


  var isValidStock = function isValidStock() {
    return props.stock.symbol !== "" && stockData.error === undefined;
  }; //Five Days History


  var historyOnClickHandler = function historyOnClickHandler() {
    props.stock.getStockFiveDayHistory().then(function (priceDataWithHistory) {
      setStockData(_objectSpread({}, priceDataWithHistory));
    })["catch"](function (error) {
      setStockData({
        error: error
      });
    });
  }; //Display Symbol Information


  return (
    /*#__PURE__*/
    React.createElement("section", {
      className: "stock-display"
    }, isValidStock() ?
    /*#__PURE__*/
    //<-- ternary in this case we have to use <React.Fragment>
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement("h2", null, "Stock Viewr Information"),
    /*#__PURE__*/
    React.createElement("div", {
      className: "details"
    }, "Symbol: ", stockData.symbol, " "),
    /*#__PURE__*/
    React.createElement("div", {
      className: "details"
    }, "Price: ", currencyFormatter(stockData.price), " "),
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("button", {
      className: "btn-history",
      onClick: historyOnClickHandler
    }, "Previous 5 Days")),
    /*#__PURE__*/
    React.createElement("div", {
      className: "history"
    }, stockData.history &&
    /*#__PURE__*/
    React.createElement(StockHistoryDisplay, {
      history: stockData.history,
      smbl: stockData.symbol
    }))) :
    /*#__PURE__*/
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement("p", null, "No data Loaded"), props.stock.symbol !== "" && stockData.error &&
    /*#__PURE__*/
    React.createElement("p", {
      style: {
        color: "red"
      }
    }, stockData.error)))
  );
};

export default StockPriceDisplay;