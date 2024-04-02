import { clearContent } from "./display";
import makeDetailsPage from "./cityDetailsPage";
import { getCityWeather } from "./weatherAPI";

const makeCard = (cardContainer, city) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-latitude', city.lat)
    card.setAttribute('data-longitude', city.lon)

    const cardHeader = document.createElement('h1')
    cardHeader.classList.add('card-header')
    cardHeader.append(`${city.name}${city.state ? `, ${  city.state}` : ''}${city.country ? `, ${  city.country}` : ''}`)

    card.addEventListener('click', async() => {
        const {latitude, longitude} = card.dataset
        const cityWeather = await getCityWeather(latitude, longitude);
        clearContent();
        makeDetailsPage(cityWeather);
    })
    card.append(cardHeader)
    cardContainer.append(card)

}

const makeCityCards = (cityList) => {
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')

    cityList.forEach((city, index) => makeCard(cardContainer, city, index));

    return cardContainer
}

export default makeCityCards