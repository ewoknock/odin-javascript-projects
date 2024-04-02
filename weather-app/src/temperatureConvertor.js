const kelvinToFahrenheit = (t) => Math.round((t - 273.15) * 1.8 + 32)

const kelvinToCelsius= (t) => Math.round(t - 273.15)

export {
    kelvinToFahrenheit,
    kelvinToCelsius,
}