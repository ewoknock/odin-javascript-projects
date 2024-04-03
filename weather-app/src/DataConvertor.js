const kelvinToFahrenheit = (t) => Math.round((t - 273.15) * 1.8 + 32)

const kelvinToCelsius = (t) => Math.round(t - 273.15)

const formatTimestamp = (time) => {
    let hours = time.getHours()
    //let minutes = time.getMinutes()

    const ampm = hours >= 12 ? 'pm' : 'am'
    hours %= 12;
    //hours = hours ? hours : 12;
    
    
    const strTime = `${hours} ${ampm}`
    return strTime

}

export {
    kelvinToFahrenheit,
    kelvinToCelsius,
    formatTimestamp,
}