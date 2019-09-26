//structure = var, then defined func, then overall func

// api
var api = 'a73f5d270b60b0d16939922df15195f3';

// zip var
var zip = document.querySelector('.form-control').value;

// Get Weather Button
var weatherBtn = document.querySelector('#weatherBtn');

// set button event onclick
weatherBtn.addEventListener('click', currentForecast);

// initialize all id vars
// error msg
var error = document.querySelector('#error');
// table itself
var toggletable = document.querySelector('#toggletable');

// table inputs
var city = document.querySelector('#city');
var tempK = document.querySelector('#tempK');
var tempF = document.querySelector('#tempF');
var tempC = document.querySelector('#tempC');
var condition = document.querySelector('#condition');
var season = document.querySelector('#season');

toggletable.style.display = 'none';

async function currentForecast() {
   // console.log()
    try {
        // hide error message for repeat tries
        error.style.display = 'none';

        // reload zip for each attempt
        zip = document.querySelector('.form-control').value;

        //get json/api
        console.log('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&id=524901&APPID=' + api)
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&id=524901&APPID=' + api)
        const currentWeather = await response.json();

        // city
        city.innerHTML = currentWeather.name;

        // temperatures
        tempK.innerHTML = `${currentWeather.main.temp} K`;
        tempF.innerHTML = `${((Number(currentWeather.main.temp) - 273.15) * (9 / 5) + 32).toFixed(2)}° F`;
        tempC.innerHTML = `${(Number(currentWeather.main.temp) - 273.15).toFixed(2)}° C`;

        // condition
        condition.innerHTML = currentWeather.weather[0].description;

        // season 
        season.innerHTML = `<img src="https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png">`;

        // display table
        toggletable.style.display = 'block';


    } catch (e) {
        // display error msg, hide table
        console.log(toggletable)
        error.style.display = 'block';
        error.innerHTML = `Please input a valid 5-digit US Zip Code. Ex. 90210<br><small>[Error: "${e}"]</small>`;
        toggletable.style.display = 'none';


    }

}



// Notes:

// API URL: `api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=15d6e8a17e124db561676b9b0b009aac`

// Test commands:
// console.log(JSON.stringify(currentWeather)); --> Logs the string version of JSON data
// console.log(currentWeather); --> Logs the JSON data
// console.log(typeof currentWeather); --> Checks the typeof JSON data
// console.log(currentWeather.main.tempK); --> A test of the temp location
// console.log(currentWeather.weather[0].description); --> A test of the conditions location
// console.log(currentWeather.name); --> A test of the city location