import {ChartUtil, BASE_BAR_CHART_CONFIG, deepCopy} from '../js/src/chart_utils.js';
import {assert, expect} from 'chai';
import sinon from 'sinon'


describe("Test Bar Chart Utils", () => {
	let chartjsStub;
	let dummyElement; 
	let chartUtil;

	const FIRST_ARGUMENT = 0;
	const SECOND_ARGUMENT = 1;

	const TEST_TITLE = "hi";
	let testChartData =  [
	    {
	       label: 'Testing label',
	       value: 234234,
	       css_color: "blue"
	    },
	    {
	       label: 'Testing label 2',
	       value: 3,
	       css_color: "green"
	    },
	]

	beforeEach("setup sinon.js and Chartjs injected with a stub.", () => {
		chartjsStub = sinon.stub();
		dummyElement = sinon.stub();
		// inject the stub as the class.
		chartUtil = new ChartUtil({chartjsClass: chartjsStub});
	});

	describe("test Constructor", () => {
		it("chartjsClass should be injected", () => {
			assert.equal(chartUtil.chartjsClass, chartjsStub);
		});
	});

	describe("test methods", () => {
		it("test renderBarChart fully populated", () => {
			// let's populate what we expect from chart
			// this is going to create a deep copy.
			let expectedChartData =  deepCopy(BASE_BAR_CHART_CONFIG);
			expectedChartData.data = {
				labels: [testChartData[0].label, testChartData[1].label],
				datasets: [{
					label: `Bar Chart Dataset`,
					data: [testChartData[0].value, testChartData[1].value],
					backgroundColor: [testChartData[0].css_color,
									  testChartData[1].css_color]
				}]
			}
			expectedChartData.options.title = {
	            display: true,
	            text: TEST_TITLE
	        }

	        // call renderBarChart from chartUtil
			chartUtil.renderBarChart(dummyElement, TEST_TITLE, testChartData);

			// we know that the dummy element is going to be our first argument.
			assert.deepEqual(chartjsStub.firstCall.args[FIRST_ARGUMENT], dummyElement)
			
			// the second argument is going to be the chartData
			
			// check for keys example
			expect(chartjsStub.firstCall.args[SECOND_ARGUMENT]).to.have.keys('type','options', 'data'); 
			
			// check to see the first level example
			expect(chartjsStub.firstCall.args[SECOND_ARGUMENT]).to.deep.include(expectedChartData);

			// check the levels within the object example
			expect(chartjsStub.firstCall.args[SECOND_ARGUMENT].type).to.deep.equal(expectedChartData.type);
			expect(chartjsStub.firstCall.args[SECOND_ARGUMENT].options).to.deep.equal(expectedChartData.options);
			expect(chartjsStub.firstCall.args[SECOND_ARGUMENT].data).to.deep.equal(expectedChartData.data);

			// more assertions examples.
			assert.deepNestedInclude(chartjsStub.firstCall.args[SECOND_ARGUMENT], expectedChartData);

			//you can ensure you're not getting bogus tests.
			assert.notDeepNestedInclude(chartjsStub.firstCall.args[SECOND_ARGUMENT], {'something':"hi"});
		});

		it("createBarChart with no title", () => {
			let emptyChartData = deepCopy(BASE_BAR_CHART_CONFIG);
			emptyChartData.data = {
				labels: [testChartData[0].label, testChartData[1].label],
				datasets: [{
					label: `Bar Chart Dataset`,
					data: [testChartData[0].value, testChartData[1].value],
					backgroundColor: [testChartData[0].css_color,
									  testChartData[1].css_color]
				}]
			}

			// call renderBarChart from chartUtil
			chartUtil.renderBarChart(dummyElement, "", testChartData, chartjsStub);		
			
			// the second argument is going to be the chartData
			//ensure that you can call a bit more in detail.
			expect(chartjsStub.firstCall.args[SECOND_ARGUMENT]).to.not.have.nested.property('options.title');
		});
	});

	afterEach(() => {
		// Restore the default sandbox here
		sinon.restore();
	});
});