function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StockSearchForm = function StockSearchForm(props) {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stockSymbol = _React$useState2[0],
      setStockSymbol = _React$useState2[1];

  var onSubmitHandler = function onSubmitHandler(event) {
    event.preventDefault();
    props.setStockCallback(stockSymbol);
  };

  var onChangeHandler = function onChangeHandler(event) {
    setStockSymbol(event.target.value);
  };

  return (
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("h2", null, "Stock Search Form"),
    /*#__PURE__*/
    React.createElement("form", {
      className: "frm symbol",
      onSubmit: onSubmitHandler
    },
    /*#__PURE__*/
    React.createElement("label", {
      htmlFor: "symbol"
    }, "Ticker Symbol"),
    /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      id: "symbol",
      name: "symbol",
      onChange: onChangeHandler,
      value: stockSymbol
    }),
    /*#__PURE__*/
    React.createElement("button", {
      type: "submit"
    }, "View")))
  );
};

export default StockSearchForm;