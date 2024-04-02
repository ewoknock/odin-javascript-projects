import { getCityList } from './weatherAPI';
import { makeCityCards, clearContent } from './display';
import './style.css';


const content = document.querySelector('body');
const main = document.querySelector('main');
const searchBar = document.querySelector('#city');

searchBar.addEventListener('keydown', async(e) => {
    if(e.key === 'Enter'){
        if(!searchBar.value) return;

        clearContent();

        const cityInfo = await getCityList()
        makeCityCards(cityInfo)


    }
})


