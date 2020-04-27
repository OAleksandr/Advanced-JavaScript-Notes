function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//Imports
import StockSearchForm from './components/StockSearchForm.js';
import StockPriceDisplay from './components/StockPriceDisplay.js';
import { Stock } from './stock.js'; //Application

var App = function App() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stockSymbol = _React$useState2[0],
      setStockSymbol = _React$useState2[1];

  React.useEffect(function () {
    console.log("New Stock Symbol is This");
    console.log(stockSymbol);
  }, [stockSymbol]);
  return (
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("h1", null, "Stock Viewer App"),
    /*#__PURE__*/
    React.createElement(StockSearchForm, {
      setStockCallback: setStockSymbol
    }),
    /*#__PURE__*/
    React.createElement(StockPriceDisplay, {
      stock: new Stock({
        symbol: stockSymbol
      })
    }))
  );
};

var reactContainer = document.querySelector("#react-container");
ReactDOM.render(
/*#__PURE__*/
React.createElement(App, null), reactContainer);