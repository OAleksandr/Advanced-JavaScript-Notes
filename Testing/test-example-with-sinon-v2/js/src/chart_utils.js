// Note: If you want to learn more about chart.js take a look at the docs here:
// https://www.chartjs.org/docs/latest/getting-started/usage.html

const BASE_BAR_CHART_CONFIG = {
    type: 'bar',
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
};

/**
 * ChartUtil 
 * @class
 * @classdesc This is going to render charts using chartjs.
 */
class ChartUtil {    
    /**
     * Create ChartUtil object.
     * @param {Object} attributes - attributes that you'd like to set in the class
     */    
    constructor(attributes) {
        this.chartjsClass = null;
        if (attributes) {
            Object.assign(this, attributes);
        }
    }

 
}

/**
 * This functions will draw a bar chart on the page.
 *
 * @param {HTMLCanvasElement} chartElement - html canvas element that you're going to use.
 * @param {string} title - the title of the table.
 * @param {Array} chartData - the data that will populate the chart
 */

    
ChartUtil.prototype.renderBarChart(chartElement, title, chartData) {
    let currentBarChartConfig = deepCopy(BASE_BAR_CHART_CONFIG);
    // set the data 
    currentBarChartConfig.data = {
        labels: chartData.map((itemData)=> itemData.label),
        datasets: [{
            label: `Bar Chart Dataset`,
            data: chartData.map((itemData)=> itemData.value),
            backgroundColor: chartData.map((itemData)=> itemData.css_color),
        }]
    }
    if (title !== ""){  
        currentBarChartConfig.options.title = {
            display: true,
            text: title
        }
    }
    new this.chartjsClass(chartElement, currentBarChartConfig);
}

/**
 * This functions will draw a bar chart on the page.
 *
 * @param {Object} firstObject - the data that will want 
 */
const deepCopy = (firstObject) => {
    return JSON.parse(JSON.stringify(firstObject));
}

export {ChartUtil, BASE_BAR_CHART_CONFIG, deepCopy}
