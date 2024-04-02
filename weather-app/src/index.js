import { getCityList } from './UserInput';
import { makeCityCards } from './display';
import './style.css';


const content = document.querySelector('body');
const main = document.querySelector('main');
const searchBar = document.querySelector('#city');

searchBar.addEventListener('keydown', async(e) => {
    if(e.key === 'Enter'){
        if(!searchBar.value) return;

        const cardContainer = document.querySelector('.card-container')
        if(cardContainer){
            main.removeChild(cardContainer);
        }
        
        const cityInfo = await getCityList()
        makeCityCards(cityInfo)


    }
})


