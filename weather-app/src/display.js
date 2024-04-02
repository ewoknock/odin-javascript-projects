const makeCard = (city, index) => {
    const cardContainer = document.querySelector('.card-container');
    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-latitude', city.lat)
    card.setAttribute('data-longitute', city.lon)

    const cardHeader = document.createElement('h1')
    cardHeader.classList.add('card-header')
    cardHeader.append(`${city.name}${city.state ? `, ${  city.state}` : ''}${city.country ? `, ${  city.country}` : ''}`)
    console.log(city)

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
}