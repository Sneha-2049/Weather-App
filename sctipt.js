
const apiKey = '43a18e774075480795925508242806';
const apiEndpoint = 'https://api.weatherapi.com/v1/current.json';
//dom manupulation
let input = document.querySelector("#Location")
let btn = document.querySelector(".submit")
let weatherDetails = document.querySelector(".weather-details")
let city = document.querySelector(".city")
let date = document.querySelector(".date")
let temp = document.querySelector(".temp")
let icon = document.querySelector(".weather-img")
let condition = document.querySelector(".Condition")
let humidity = document.querySelector(".humidity")
let windSpeed = document.querySelector(".wind-speed")
let windDir = document.querySelector(".wind-dir")
let data;
let sunny = ""

// Function to fetch weather data for a specific location
async function fetchWeather(location) {
    const url = `${apiEndpoint}?key=${apiKey}&q=${location}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        data = await response.json();
        city.innerHTML = `${data.location.name}, ${data.location.region}`
        temp.innerHTML = `${data.current.temp_c}&deg;C`
        icon.src = `https:${data.current.condition.icon}`
        condition.innerHTML = `${data.current.condition.text}`
        humidity.innerHTML = `${data.current.humidity}%`
        windSpeed.innerHTML = `${data.current.wind_kph}km/h`
        windDir.innerHTML = `${data.current.wind_dir}`
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
btn.addEventListener("click", (e) => {
    let region = input.value
    fetchWeather(region);
    weatherDetails.style.display = "flex"
    let day = new Date()
    date.innerHTML = day
})

