import currentPage from './currentPage'
import makeCityCards from './cityCards'
import makeDetailsPage from './cityDetailsPage';

const clearContent = () => {
    const content = document.querySelector('.content')
    while (content.firstChild){
        content.firstChild.remove();
    }
}

const addContent = (content) => {
    const main = document.querySelector('main');
    main.append(content)
}

const reloadPage = (cityInfo) => {
    clearContent()
    if (currentPage.getPage() === 'citySearch') makeCityCards(cityInfo)
    if (currentPage.getPage() === 'details') makeDetailsPage()

}

export{
    clearContent,
    addContent,
    reloadPage
}