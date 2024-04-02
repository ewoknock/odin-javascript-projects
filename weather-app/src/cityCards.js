import { clearContent } from "./display";
import makeDetailsPage from "./cityDetailsPage";
import { getCityWeather, getCityForecast } from "./weatherAPI";
import unitsManager from './unitsManager'

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
    const cityWeather = await getCityWeather(latitude, longitude)

    const cardWeather = document.createElement('div')
    cardWeather.classList.add('card-weather')
    cardWeather.append(cityWeather.weather[0].main)
    card.append(cardWeather)

    const cardTemperature = document.createElement('div')
    cardTemperature.classList.add('card-temperature')
    cardTemperature.append(`${unitsManager.getTemperature(cityWeather.main.temp)}°F`)
    card.append(cardTemperature)

    card.addEventListener('click', async() => {

        const cityForecast = await getCityForecast(latitude, longitude)
        clearContent()
        makeDetailsPage(cityWeather, cityForecast.list.slice(0,5))
    })


}

const makeCityCards = (cityList) => {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    cityList.forEach((city) => makeCard(cardContainer, city))

    return cardContainer
}

export default makeCityCards