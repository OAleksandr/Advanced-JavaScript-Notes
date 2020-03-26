var API_KEY = '52fc99a956494caea7b135022179925e';
var ENDPOINT = 'https://api.openweathermap.org/data/2.5/';
/* 
 * A weather object that fetches and renders data.
 * @constructor
 * @param {Object} attributes - object options for the weather object
 **/

var Weather = function Weather(attributes) {
  this.city = "";
  this.weatherData = {};

  if (attributes) {
    Object.assign(this, attributes);
  }
};
/*
 * Updates the weatherData object with the current weather.
 */


Weather.prototype.getWeather = function () {
  var _this = this;

  return fetch("".concat(ENDPOINT, "weather?q=").concat(this.city, "&units=metric&appid=").concat(API_KEY)).then(function (data) {
    return data.json();
  }).then(function (weatherData) {
    var location = "".concat(weatherData.name, ", ").concat(weatherData.sys.country),
        date = new Date(+weatherData.dt * 1000),
        conditions = weatherData.weather[0].main,
        temp = weatherData.main.temp,
        sunrise = new Date(+weatherData.sys.sunrise * 1000),
        sunset = new Date(+weatherData.sys.sunset * 1000);
    var formattedWeather = {
      location: location,
      date: date,
      conditions: conditions,
      temp: temp,
      sunrise: sunrise,
      sunset: sunset
    };
    return Object.assign(_this.weatherData, formattedWeather);
  });
};
/*
 * Updates the weatherData object with the current forecast.
 */


Weather.prototype.getForecast = function () {
  var _this2 = this;

  return fetch("".concat(ENDPOINT, "forecast?q=").concat(this.city, "&units=metric&appid=").concat(API_KEY)).then(function (data) {
    return data.json();
  }).then(function (forecastData) {
    var currDate,
        nextDate,
        day = -1,
        forecast = [];
    forecastData.list.forEach(function (item) {
      // destructuring for desired variables
      var date = item.dt_txt,
          _item$main = item.main,
          high = _item$main.temp_max,
          low = _item$main.temp_min,
          condition = item.weather[0].main; // remove the time from the date

      nextDate = date.split(' ')[0];

      if (currDate !== nextDate) {
        // a new day
        currDate = nextDate;
        day += 1; // store the new day ... just take the initial condition value

        forecast.push({
          condition: condition,
          date: currDate,
          high: high,
          low: low
        });
      } // find the highest high and the lowest low


      if (forecast[day].high < high) {
        forecast[day].high = high;
      }

      if (forecast[day].low > low) {
        forecast[day].low = low;
      }
    });
    var formattedForecast = {
      forecast: forecast
    };
    return Object.assign(_this2.weatherData, formattedForecast);
  });
};
/* 
 * Updates the weatherData object with the current weather and forecast.
 */


Weather.prototype.getWeatherAndForecast = function () {
  var _this3 = this;

  var fullWeather = {};
  return this.getWeather(this.city).then(function (formattedWeather) {
    return _this3.getForecast(_this3.city);
  }).then(function (formattedForecast) {
    return _this3.weatherData;
  });
}; //window.Weather = Weather; //comment this because with (npx mocha --require esm) will show you an error.


export { Weather };