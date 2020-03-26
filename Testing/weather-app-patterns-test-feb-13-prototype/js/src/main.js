import {Weather} from './weather.js';

// forecast template is used as a partial in the weather template, register here
Handlebars.registerPartial('forecast', Handlebars.templates['forecast']);
const weatherTemplate = Handlebars.templates['weather'];
/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the
 * OpenWeatherMap weather API. 
 */
(() => { 
    /**
     * Displays the current weather for a given location.
     * @param {Weather} weatherObject - A weather and forecast manager
     * @param {HTMLElement} el - The reference to the display DOM element.
     */ 
    const displayWeather = (weatherObject, el) => {
        console.log(weatherObject, "OBj");
        console.log(el, "el")
        weatherObject.getWeatherAndForecast().then(()=>{
            el.innerHTML = weatherTemplate(weatherObject.weatherData);
        });
    }

    // Event listener for retrieving a weather forecast
    document
        .querySelector('.frm.weather')
        .addEventListener('submit', function (e) {
            let location = e
                .target
                .querySelector('[name=location]')
                .value;

            e.preventDefault();

            displayWeather(new Weather({city: location}),document.querySelector(".weather-display"))

        });
})();