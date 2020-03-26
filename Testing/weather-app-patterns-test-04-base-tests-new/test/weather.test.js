// import test suite requirements
import chai from 'chai';
import fetchMock from 'fetch-mock';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

// apply the 'should' assertion style
chai.should();

// import application requirements
import { Weather, API_KEY, ENDPOINT } from '../js/src/weather.js';

//const API_KEY = "YOUR_API_KEY_HERE";
//const ENDPOINT = 'https://api.openweathermap.org/data/2.5/';

const LOCATION = 'Edmonton';
const WEATHER_URL = `${ENDPOINT}weather?q=${LOCATION}&units=metric&appid=${API_KEY}`;


describe('Weather', function () {
    it('should exist', function () {
        Weather.should.exist;
    });

    describe('General test suite', function () {

        describe('Constructor', function() {
            let w;
            
            before('setup Weather instance', function () {
                w = new Weather(); // create instance w
            });

            describe('Weather instance', function () {
                it('should be a Weather object', function () {
                    w.should.be.an('object');
                    w.should.be.an.instanceof(Weather);
                });
            });

            describe('Default constructor', function () {
                it('has the proper default properties', function () {
                    w.city.should.be.a('string');
                    w.city.should.equal('');
                    w.weatherData.should.deep.equal({});
                });
            });
        });
 
        describe("Methods", function() {
            let weather;
            const COUNTRY = "CA";
            const DATE = 1579108152;
            const SUNRISE = 1579102945; 
            const SUNSET = 1579131810;
            const CONDITIONS = 'Drizzle';
            const TEMP = -35.35;

            let testWeatherData = 
            {
                location: `${LOCATION}, ${COUNTRY}`,
                date: new Date(DATE * 1000),
                conditions: CONDITIONS,
                temp: TEMP,
                sunrise: new Date(SUNRISE * 1000),
                sunset: new Date(SUNSET * 1000)
            };

            before('setup fetchMock', function() {
                fetchMock.get(WEATHER_URL, {
                      "coord": {
                        "lon": -113.47,
                        "lat": 53.55
                      },
                      "weather": [
                        {
                          "id": 800,
                          "main": CONDITIONS,
                          "description": "clear sky",
                          "icon": "01d"
                        }
                      ],
                      "base": "stations",
                      "main": {
                        "temp": TEMP,
                        "feels_like": -40.75,
                        "temp_min": -37.78,
                        "temp_max": -32.78,
                        "pressure": 1027,
                        "humidity": 73
                      },
                      "visibility": 2816,
                      "wind": {
                        "speed": 2.1,
                        "deg": 250
                      },
                      "clouds": {
                        "all": 1
                      },
                      "dt": DATE,
                      "sys": {
                        "type": 1,
                        "id": 789,
                        "country": COUNTRY,
                        "sunrise": SUNRISE,
                        "sunset": SUNSET
                      },
                      "timezone": -25200,
                      "id": 5946768,
                      "name": "Edmonton",
                      "cod": 200
                    }
                );
            });

            beforeEach(`setup weather for ${LOCATION}`, function() {
                weather = new Weather({city: LOCATION});// city is imported from the class
            })

            it("test getWeather()", function() {
                let weatherData = weather.getWeather();

                fetchMock.lastUrl().should.equal(WEATHER_URL);

                return weatherData.should.eventually.deep.equal(testWeatherData);
            });


            //TODO: also test getForecast()

            //TODO: also test getWeatherAndForecast()
        });
    });

    
});