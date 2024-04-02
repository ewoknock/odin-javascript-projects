import { getCityWeather } from "./weatherAPI";
import { makeDetailsPage } from './cityDetailsPage'

const clearContent = () => {
    const content = document.querySelector('.content')
    while (content.firstChild){
        content.firstChild.remove();
    }
}

const makeCard = (city, index) => {
    const cardContainer = document.querySelector('.card-container');
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
    const content = document.querySelector('main')
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
    content.append(cardContainer);

    cityList.forEach((city, index) => makeCard(city, index));
}




export{
    makeCityCards,
    clearContent,
}