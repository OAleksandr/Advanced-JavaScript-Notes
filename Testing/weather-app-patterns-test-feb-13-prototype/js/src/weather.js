const API_KEY = '52fc99a956494caea7b135022179925e';
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/';
  
/* 
 * A weather object that fetches and renders data.
 * @constructor
 * @param {Object} attributes - object options for the weather object
 **/
const Weather = function(attributes) {
	this.city = "";
	this.weatherData = {}
	if (attributes) {
		Object.assign(this, attributes);
	}
}

/*
 * Updates the weatherData object with the current weather.
 */
Weather.prototype.getWeather = function() {
	return fetch(`${ENDPOINT}weather?q=${this.city}&units=metric&appid=${API_KEY}`)
		.then(data => {
            return data.json()
        }).then(weatherData => {
	        let location = `${weatherData.name}, ${weatherData.sys.country}`,
	            date = new Date(+ weatherData.dt * 1000),
	            conditions = weatherData.weather[0].main,
	            temp = weatherData.main.temp,
	            sunrise = new Date(+ weatherData.sys.sunrise * 1000),
				sunset = new Date(+ weatherData.sys.sunset * 1000);
					

			let formattedWeather = {location, date, conditions, temp, sunrise, sunset};
        	return Object.assign(this.weatherData, formattedWeather);
        });
};

/*
 * Updates the weatherData object with the current forecast.
 */
Weather.prototype.getForecast = function() {
	return fetch(`${ENDPOINT}forecast?q=${this.city}&units=metric&appid=${API_KEY}`)
		.then(data => {
            return data.json()
        }).then(forecastData => {
	    	let currDate,
	            nextDate,
	            day = -1,
	            forecast = [];

	        forecastData.list.forEach((item) => {
	            // destructuring for desired variables
	            let { dt_txt: date } = item,
	                { temp_max: high, temp_min: low} = item.main,
	                { main: condition } = item.weather[0];

	            // remove the time from the date
	            nextDate = date.split(' ')[0];
	            if (currDate !== nextDate) {
	                // a new day
	                currDate = nextDate;
	                day += 1;
	                // store the new day ... just take the initial condition value
	                forecast.push({condition, date:currDate, high, low});
	            }

	            // find the highest high and the lowest low
	            if (forecast[day].high < high) {
	                forecast[day].high = high;
	            }

	            if (forecast[day].low > low) {
	                forecast[day].low = low;
	            }
	        });
	        let formattedForecast = {forecast};
	        return Object.assign(this.weatherData, formattedForecast);
        });
};

/* 
 * Updates the weatherData object with the current weather and forecast.
 */
Weather.prototype.getWeatherAndForecast =  function() {
	let fullWeather = {};
	return this.getWeather(this.city)
		.then((formattedWeather)=>{
			return this.getForecast(this.city);
		}).then((formattedForecast)=> {
			return this.weatherData;
		});
}

//window.Weather = Weather; //comment this because with (npx mocha --require esm) will show you an error.

export {Weather};