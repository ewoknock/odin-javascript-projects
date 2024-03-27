import nav from './nav';
import { loadPage } from './display-controller';
import { taskFactory } from './tasks.js'
import './style.css'

const bluePlus = '\u2295';
const blueMinus = '\u2296'

const dialog = document.querySelector("dialog");
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskForm = document.querySelector("form");

let content = document.querySelector('body');

let main = document.createElement('main');

content.appendChild(main);

let navbar = nav();
main.appendChild(navbar);

loadPage("Home", tasks, bluePlus);

const newTaskButton = document.getElementById('new-task-button');
const closeButton = document.getElementById('close-dialog-btn');
const collapseButtons = document.querySelectorAll('.collapse-button');

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

    const newTask = taskFactory(title, description, date, project);

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskForm.reset();
    dialog.close();
});

collapseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let content = button.parentElement.nextElementSibling;
        if(content.style.display === "flex"){
            content.style.display = "none";
            button.innerHTML = bluePlus;
        } else{
            content.style.display = "flex";
            button.textContent = blueMinus;
        }
    });
})

export { bluePlus }