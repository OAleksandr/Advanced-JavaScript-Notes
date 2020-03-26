import chai from 'chai';
chai.should();
import {Weather} from '../js/src/weather.js';

describe("Testing Weather", function()
{
    it("Should Exist", function()
    {
        Weather.should.exist;
    });

    describe("Test Constructor", () => 
    {
        let weather;

        describe("Empty Weather Instance", () =>
        {
            before("Setup weather Instance", () =>
            { 
                weather = new Weather();
            });

            it("Should be a Weather Object", () =>
            {
                weather.should.be.an('object');
                weather.should.be.an.instanceof(Weather);
            })

            it("Should have empty attributes", () =>
            {
                weather.city.should.be.a('string');
                weather.city.should.equal('');
                weather.weatherData.should.deep.equal({});
            });
        });

        describe("Populated Weather Instance", () =>
        {
            const TEST_CITY = "Calgary";
            const TEST_RANDOM = "Random Thing";

            before("Setup Weather", () =>
            {
                weather = new Weather({city: TEST_CITY, random: TEST_RANDOM});
            });

            it("Attributes are what we expect", () =>
            {
                weather.city.should.equal(TEST_CITY);
                weather.random.should.equal(TEST_RANDOM);
            });
        });
    });
});