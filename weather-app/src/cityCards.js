import makeDetailsPage from "./cityDetailsPage";
import weatherAPI from "./weatherAPI";
import unitsManager from './unitsManager'
import currentPage from "./currentPage";
import { clearContent } from "./display";
import getWeatherIcon from "./getWeatherIcon";

const makeCard = async(cardContainer, city) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-latitude', city.lat)
    card.setAttribute('data-longitude', city.lon)

    const cardHeader = document.createElement('h1')
    cardHeader.classList.add('card-header')
    cardHeader.append(`${city.name}${city.state ? `, ${  city.state}` : ''}${city.country ? `, ${  city.country}` : ''}`)
    
    card.append(cardHeader)
    cardContainer.append(card)

    const {latitude, longitude} = card.dataset
    await weatherAPI.setCityWeather(latitude, longitude)
    let cityWeather = weatherAPI.getCityWeather()

    const cardWeather = new Image();
    cardWeather.classList.add('card-weather')
    cardWeather.src = getWeatherIcon(cityWeather.weather[0].main)
    card.append(cardWeather)

    const cardTemperature = document.createElement('div')
    cardTemperature.classList.add('card-temperature')
    cardTemperature.append(`${unitsManager.getTemperature(cityWeather.main.temp)}°${unitsManager.getUnits()}`)
    card.append(cardTemperature)

    card.addEventListener('click', async() => {
        await weatherAPI.setCityForecast(latitude, longitude)
        const cityForecast = weatherAPI.getCityForecast()
        await weatherAPI.setCityWeather(latitude, longitude)
        cityWeather = weatherAPI.getCityWeather()
        clearContent()
        console.log(cityWeather)
        makeDetailsPage(cityWeather, cityForecast.list.slice(0,5))
    })


}

const makeCityCards = async() => {
    const cityList = weatherAPI.getCityList()
    currentPage.setPage('citySearch')
    const container = document.querySelector('main');
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
    cityList.forEach((city) => makeCard(cardContainer, city))

    container.append(cardContainer)
}

export default makeCityCards