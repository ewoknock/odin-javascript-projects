import weatherAPI from './weatherAPI';
import { clearContent, reloadPage } from './display';
import makeCityCards from './cityCards'
import unitsManager from './unitsManager'
import './style.css';

const searchBar = document.querySelector('#city');

const fahrenheit = document.querySelector('.nav-temp-fahrenheit')
fahrenheit.classList.add('active')

const cityInfo = ''

const celsius = document.querySelector('.nav-temp-celsius')

fahrenheit.addEventListener('click', () => {
    unitsManager.setUnits('Fahrenheit')
    fahrenheit.classList.add('active')
    celsius.classList.remove('active')
    reloadPage(cityInfo)

})

celsius.addEventListener('click', () => {
    unitsManager.setUnits('Celsius')
    celsius.classList.add('active')
    fahrenheit.classList.remove('active')
    reloadPage(cityInfo)
})

searchBar.addEventListener('keydown', async(e) => {
    if(e.key === 'Enter'){
        if(!searchBar.value) return;

        clearContent();

        await weatherAPI.setCityList()
        clearContent();
        makeCityCards()
    }
})


