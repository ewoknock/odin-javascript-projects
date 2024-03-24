import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';
import clear from './clear';
import './style.css';

home();


let homeButton = document.getElementById('home');
homeButton.onclick= () => {
    clear();
    home();
};

let menuButton = document.getElementById('menu');
menuButton.onclick= () => {
    clear();
    menu();
};

let aboutButton = document.getElementById('about');
aboutButton.onclick= () => {
    clear();
    about();
};

let contactButton = document.getElementById('contact');
contactButton.onclick= () => {
    clear();
    contact();
};