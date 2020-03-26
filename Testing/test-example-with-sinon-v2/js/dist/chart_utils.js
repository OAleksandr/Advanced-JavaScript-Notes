function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Note: If you want to learn more about chart.js take a look at the docs here:
// https://www.chartjs.org/docs/latest/getting-started/usage.html
var BASE_BAR_CHART_CONFIG = {
  type: 'bar',
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};
/**
 * ChartUtil 
 * @class
 * @classdesc This is going to render charts using chartjs.
 */

var ChartUtil = /*#__PURE__*/function () {
  /**
   * Create ChartUtil object.
   * @param {Object} attributes - attributes that you'd like to set in the class
   */
  function ChartUtil(attributes) {
    _classCallCheck(this, ChartUtil);

    this.chartjsClass = null;

    if (attributes) {
      Object.assign(this, attributes);
    }
  }
  /**
   * This functions will draw a bar chart on the page.
   *
   * @param {HTMLCanvasElement} chartElement - html canvas element that you're going to use.
   * @param {string} title - the title of the table.
   * @param {Array} chartData - the data that will populate the chart
   */


  _createClass(ChartUtil, [{
    key: "renderBarChart",
    value: function renderBarChart(chartElement, title, chartData) {
      var currentBarChartConfig = deepCopy(BASE_BAR_CHART_CONFIG); // set the data 

      currentBarChartConfig.data = {
        labels: chartData.map(function (itemData) {
          return itemData.label;
        }),
        datasets: [{
          label: "Bar Chart Dataset",
          data: chartData.map(function (itemData) {
            return itemData.value;
          }),
          backgroundColor: chartData.map(function (itemData) {
            return itemData.css_color;
          })
        }]
      };

      if (title !== "") {
        currentBarChartConfig.options.title = {
          display: true,
          text: title
        };
      }

      new this.chartjsClass(chartElement, currentBarChartConfig);
    }
  }]);

  return ChartUtil;
}();
/**
 * This functions will draw a bar chart on the page.
 *
 * @param {Object} firstObject - the data that will want 
 */


var deepCopy = function deepCopy(firstObject) {
  return JSON.parse(JSON.stringify(firstObject));
};

export { ChartUtil, BASE_BAR_CHART_CONFIG, deepCopy };