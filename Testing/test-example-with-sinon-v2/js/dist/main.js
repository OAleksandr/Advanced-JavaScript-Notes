import { ChartUtil } from './chart_utils.js'; // import Chart from '../node_modules/chartjs/chart.js';

var chartElement = document.getElementById('myChart');
var chartData = [{
  label: 'yes',
  value: 34,
  css_color: "green"
}, {
  label: 'no',
  value: 33,
  css_color: "red"
}, {
  label: 'maybe',
  value: 33,
  css_color: "yellow"
}, {
  label: 'absolutely',
  value: 45,
  css_color: "blue"
}];
var chartUtil = new ChartUtil({
  chartjsClass: Chart
});
chartUtil.renderBarChart(chartElement, "Example", chartData);