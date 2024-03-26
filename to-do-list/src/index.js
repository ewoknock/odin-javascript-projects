import nav from './nav';
import './style.css'

let content = document.querySelector('body');

let main = document.createElement('main');

content.appendChild(main);

let navbar = nav();

main.appendChild(navbar);