import nav from './nav';
import { loadPage } from './display-controller';
import { taskFactory } from './tasks.js'
import './style.css'

const dialog = document.querySelector("dialog");
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskForm = document.querySelector("form");


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

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const project = document.getElementById('project').value;
    const description = document.getElementById('description').value;

    const newTask = taskFactory(title, date, project, description);

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskForm.reset();
    dialog.close();
});