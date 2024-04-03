const API_KEY = '8095bf42b6706e42f1b2fde540e8937d'

const weatherAPI = (() => {
    let cityList;
    let cityWeatherData;
    let cityForecast;

    const setCityList = async() => {
        const cityInput = document.querySelector('#city')
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=${API_KEY}`, { mode: 'cors'})
        cityList = await response.json();
        cityInput.value = '';
    }

    const getCityList = () => cityList
    
    const setCityWeather = async(latitude, longitude) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, { mode: 'cors'})
        cityWeatherData = await response.json();
    }

    const getCityWeather = () => cityWeatherData
    
    const setCityForecast = async (latitude, longitude) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, { mode: 'cors'})
        cityForecast = await response.json();
    }

    const getCityForecast = () => cityForecast
    
    return{
        setCityList,
        setCityWeather,
        setCityForecast,
        getCityList,
        getCityWeather,
        getCityForecast
    }
})()

export default weatherAPI
