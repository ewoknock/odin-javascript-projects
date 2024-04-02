import { kelvinToCelsius, kelvinToFahrenheit } from "./DataConvertor";

const unitsManager = (() => {
    let units = 'Fahrenheit'

    const getUnits = () => units.charAt(0)

    const setUnits = (unit) => {
        units = unit;
    }

    const getTemperature = (temp) => (units === 'Fahrenheit' ? kelvinToFahrenheit(temp) : kelvinToCelsius(temp))

    return {
        getUnits, setUnits, getTemperature
    }
})()

export default unitsManager;