import nav from './nav';
import { loadPage } from './display-controller';
import './style.css'


const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let content = document.querySelector('body');

let main = document.createElement('main');

content.appendChild(main);

let navbar = nav();
main.appendChild(navbar);

loadPage("Home", tasks);

