import nav from './nav';
import { loadPage } from './display-controller';
import './style.css'

const dialog = document.querySelector("dialog");
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


let content = document.querySelector('body');

let main = document.createElement('main');

content.appendChild(main);

let navbar = nav();
main.appendChild(navbar);

loadPage("Home", tasks);

const newTaskButton = document.getElementById('new-task-button');
const closeButton = document.getElementById('close-dialog-btn');

newTaskButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});