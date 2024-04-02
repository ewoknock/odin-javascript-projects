const API_KEY = '8095bf42b6706e42f1b2fde540e8937d'

const getCityList = async() => {
    const cityInput = document.querySelector('#city')
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=5&appid=${API_KEY}`, { mode: 'cors'})
    const cityList = await response.json();
    cityInput.value = '';
    return cityList;
}

const getCityWeather = async (latitude, longitude) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, { mode: 'cors'})
    const cityWeather = await response.json();

    return cityWeather;
}

const getCityForecast = async (latitude, longitude) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`, { mode: 'cors'})
    const cityForecast = await response.json();

    return cityForecast
}

export{
    getCityList,
    getCityWeather,
    getCityForecast
}
