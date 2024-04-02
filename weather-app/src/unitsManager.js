import { kelvinToCelsius, kelvinToFahrenheit } from "./DataConvertor";

const unitsManager = (() => {
    let units = 'Fahrenheit'

    const getUnits = () => units;

    const setUnits = (unit) => {
        units = unit;
    }

    const getTemperature = (temp) => (units === 'Fahrenheit' ? kelvinToFahrenheit(temp) : kelvinToCelsius(temp))

    return {
        getUnits, setUnits, getTemperature
    }
})()

export default unitsManager;