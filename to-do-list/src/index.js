import nav from './nav';
import { loadPage, bluePlus, blueMinus, populateDialog } from './display-controller';
import { taskFactory, toggleCompleted, getProjects, filterTasksByProject } from './tasks.js'
import './style.css'



const newTaskDialog = document.getElementById("new-dialog");
const editTaskDialog = document.getElementById("edit-dialog");
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const newTaskForm = document.querySelector("#new-task-form");
const editTaskForm = document.querySelector("#edit-task-form");


let content = document.querySelector('body');

let main = document.createElement('main');

content.appendChild(main);
console.log(tasks);
let navbar = nav(getProjects(tasks));
main.appendChild(navbar);

loadPage("Home", tasks, bluePlus);

const newTaskButton = document.getElementById('new-task-button');
const closeButtons = document.querySelectorAll('#close-dialog-btn');
const completeCheckboxes = document.querySelectorAll('.complete-checkbox');
const editButtons = document.querySelectorAll('.edit-button');
const projectLinks = document.querySelectorAll(".project-link");

console.log(projectLinks);

newTaskButton.addEventListener("click", () => {
    newTaskDialog.showModal();
});

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        newTaskDialog.close();
        editTaskDialog.close();
    });
});

newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let project = document.getElementById('project').value;
    let description = document.getElementById('description').value;

    let newTask = taskFactory(title, description, date, project);

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setSidebarListeners();

    newTaskForm.reset();
    newTaskDialog.close();
});


editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
;
    let title = event.target.querySelector('#title').value;
    let date = event.target.querySelector('#date').value;
    let project = event.target.querySelector('#project').value;
    let description = event.target.querySelector('#description').value;

    let index = document.querySelector('input[type = "hidden"]').value;
    
    let task = taskFactory(title, description, date, project);

    tasks[index] = task;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setSidebarListeners();

    editTaskForm.reset();
    editTaskDialog.close();
});

const setSidebarListeners = () => {
    const collapseButtons = document.querySelectorAll('.collapse-button');

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
    });
}


completeCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        let index = checkbox.dataset.index;
        toggleCompleted(tasks, index);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    })
});

editButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let index = button.dataset.index;
        editTaskDialog.showModal();
        populateDialog(index, tasks[index]);
    });
});

projectLinks.forEach((link) => {
    link.addEventListener(("click"), () => {
        let project  = link.textContent;
        if(project == "Home"){
            loadPage(project, tasks, bluePlus);
            setSidebarListeners();
        }
        else{
            loadPage(project, filterTasksByProject(tasks, project), bluePlus);
            setSidebarListeners();
        }
    });
});
export { bluePlus }

setSidebarListeners();
