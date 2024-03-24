import menuCard from './menu_card';
import ribEyeA5 from './images/rib-eye-a5.png';

let menu = () => {
    let content = document.querySelector('body');
    
    let menu = document.getElementById('menu');
    menu.classList.add('active');

    let container = document.createElement('main');
    container.classList.add('container');

    let header = document.createElement('h1');
    header.innerText = 'Menu Placeholder';
    container.appendChild(header);


    content.insertBefore(container, document.querySelector('footer'));

}
export default menu