import { formatTimestamp } from "./DataConvertor"
import unitsManager from "./unitsManager"
import currentPage from "./currentPage"
import weatherAPI from "./weatherAPI"
import getWeatherIcon from "./getWeatherIcon"

const makeDetailsSummaryCard = (cityWeather) => {
    const currentTime = new Date(Date.now())

    const detailsSummaryHeader = document.querySelector('.details-summary-header')
    detailsSummaryHeader.innerHTML = `<strong>${cityWeather.name}</strong> <span>as of ${currentTime.toLocaleTimeString()}</span>`

    const detailsTemperature = document.querySelector('.content-temperature')
    detailsTemperature.innerText = `${unitsManager.getTemperature(cityWeather.main.temp)}°`
    
    const detailsWeather = document.querySelector('.content-weather')
    const weatherIcon = new Image();
    weatherIcon.src = getWeatherIcon(cityWeather.weather[0].main)
    detailsWeather.append(weatherIcon)

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
        const weatherCode = new Image()
        weatherCode.src = getWeatherIcon(weather.weather[0].main)
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

const makeDetailsPage = () => {
    console.log('details page')
    currentPage.setPage('details')
    const container = document.querySelector('main');
    const template = document.querySelector('#details-template')
    const detailsTemplate = document.importNode(template.content, true);
    container.append(detailsTemplate);


    makeDetailsSummaryCard(weatherAPI.getCityWeather())
    makeHourlyForecastCard(weatherAPI.getCityForecast().list.slice(0,5));
}

export default makeDetailsPage