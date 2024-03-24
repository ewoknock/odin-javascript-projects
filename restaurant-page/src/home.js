import nav from './nav';
import footer from './footer';
import menuCard from './menu_card';
import ribEyeA5 from './images/rib-eye-a5.png';

let home = () => {
    let content = document.querySelector('body');
    
    if(!document.querySelector('nav')){
        let navbar = nav();
        content.appendChild(navbar);
    }
    let home = document.getElementById('home');
    home.classList.add('active');

    let container = document.createElement('main');
    container.classList.add('container');

    let header = document.createElement('h1');
    header.innerText = '10 KBBQ';
    container.appendChild(header);

    let tagline = document.createElement('p');
    tagline.innerText = `What is 10 KBBQ? This is a Korean restaurant where you can enjoy 10 different types of high quality wagyu beef at a BBQ table`;
    container.appendChild(tagline);

    content.appendChild(container);

    content.appendChild(menuCard('Test', '$100', ribEyeA5));

    if(!document.querySelector('footer')){
        footer();
    }
}
export default home