import { formatTimestamp } from "./DataConvertor"
import unitsManager from "./unitsManager"

const makeDetailsSummaryCard = (cityWeather) => {
    const currentTime = new Date(Date.now())

    const detailsSummaryHeader = document.querySelector('.details-summary-header')
    detailsSummaryHeader.innerHTML = `<strong>${cityWeather.name}</strong> <span>as of ${currentTime.toLocaleTimeString()}</span>`

    const detailsTemperature = document.querySelector('.content-temperature')
    detailsTemperature.innerText = `${unitsManager.getTemperature(cityWeather.main.temp)}°`
    
    const detailsWeather = document.querySelector('.content-weather')
    detailsWeather.innerText = `${cityWeather.weather[0].main}`

    const detailsHighLow = document.querySelector('.content-high-low')
    detailsHighLow.innerText = `High ${unitsManager.getTemperature(cityWeather.main.temp_max)}° • Low ${unitsManager.getTemperature(cityWeather.main.temp_min)}°`
}

const createTableCell = (cellClass, value) => {
    const cell = document.createElement('td')
    cell.classList.add(cellClass)
    cell.append(value)
    return cell
}

const makeHourlyForecastCard = (cityForecast) => {
    const forecastContainer = document.querySelector('.hourly-summary-content')

    cityForecast.forEach((weather) => {
        const time = formatTimestamp(new Date(weather.dt * 1000))
        const weatherCode = weather.weather[0].main
        const temperature = `${unitsManager.getTemperature(weather.main.temp)}°`

        const forecastRow = document.createElement('tr')

        const timeCell = createTableCell('hourly-time', time)
        const tempCell = createTableCell('hourly-temp', temperature)
        const weatherCell = createTableCell('hourly-weather', weatherCode)

        forecastRow.append(timeCell)
        forecastRow.append(tempCell)
        forecastRow.append(weatherCell)

        forecastContainer.append(forecastRow)
    })
}

const makeDetailsPage = (cityWeather, cityForecast) => {
    const container = document.querySelector('main');
    const template = document.querySelector('#details-template')
    const detailsTemplate = document.importNode(template.content, true);
    container.append(detailsTemplate);

    makeDetailsSummaryCard(cityWeather)
    makeHourlyForecastCard(cityForecast);
    console.log(cityWeather);
    console.log(cityForecast);
}

export default makeDetailsPage