import { getCityList } from './weatherAPI';
import { clearContent, addContent } from './display';
import makeCityCards from './cityCards'
import './style.css';

const searchBar = document.querySelector('#city');

const fahrenheit = document.querySelector('.nav-temp-fahrenheit')
fahrenheit.classList.add('active')

searchBar.addEventListener('keydown', async(e) => {
    if(e.key === 'Enter'){
        if(!searchBar.value) return;

        clearContent();

        const cityInfo = await getCityList()
        const content = await makeCityCards(cityInfo)
        addContent(content)


    }
})


