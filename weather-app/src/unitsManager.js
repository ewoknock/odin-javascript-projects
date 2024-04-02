const unitsManager = (() => {
    let units = 'Fahrenheit'

    const getUnits = () => units;

    const setUnits = (unit) => {
        units = unit;
    }

    return {
        getUnits, setUnits
    }
})()

export default unitsManager;