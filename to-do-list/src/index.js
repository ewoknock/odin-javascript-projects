import nav from './nav';
import {
  loadPage,
  bluePlus,
  blueMinus,
  populateDialog,
} from './display-controller';
import {
  taskFactory, toggleCompleted, getProjects, filterTasksByProject,
} from './tasks';
import './style.css';

const newTaskDialog = document.getElementById('new-dialog');
const editTaskDialog = document.getElementById('edit-dialog');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const newTaskForm = document.querySelector('#new-task-form');
const editTaskForm = document.querySelector('#edit-task-form');

const content = document.querySelector('body');

const main = document.createElement('main');

content.appendChild(main);
const navbar = nav(getProjects(tasks));
main.appendChild(navbar);

loadPage('Home', tasks, bluePlus);

const newTaskButton = document.getElementById('new-task-button');
const closeButtons = document.querySelectorAll('#close-dialog-btn');
const projectLinks = document.querySelectorAll('.project-link');


newTaskButton.addEventListener('click', () => {
  newTaskDialog.showModal();
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    newTaskDialog.close();
    editTaskDialog.close();
  });
});


const setCollapseButtonListeners = () => {
    const collapseButtons = document.querySelectorAll('.collapse-button');
  
    collapseButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const div = button.parentElement.nextElementSibling;
        if (div.style.display === 'flex') {
            div.style.display = 'none';
          // eslint-disable-next-line no-param-reassign
          button.innerHTML = bluePlus;
        } else {
            div.style.display = 'flex';
          // eslint-disable-next-line no-param-reassign
          button.textContent = blueMinus;
        }
      });
    });
  };
  
  const setEditButtonListeners = () => {
    const editButtons = document.querySelectorAll('.edit-button');
  
    editButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const { index } = button.dataset;
        editTaskDialog.showModal();
        populateDialog(tasks[index]);
      });
    });
  };

  const setCompleteCheckboxListeners = () => {
    const completeCheckboxes = document.querySelectorAll('.complete-checkbox');

    completeCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
          const { index } = checkbox.dataset;
          toggleCompleted(tasks, index);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        });
      });
      
  }
  
const updateEventListeners = () => {
    setCollapseButtonListeners();
    setEditButtonListeners();
    setCompleteCheckboxListeners();
  };

newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const project = document.getElementById('project').value;
  const description = document.getElementById('description').value;

  const newTask = taskFactory(title, description, date, project, tasks.length);

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateEventListeners();

  newTaskForm.reset();
  newTaskDialog.close();
  loadPage(project, filterTasksByProject(tasks, project), bluePlus);
  updateEventListeners();
});

editTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = event.target.querySelector('#title').value;
  const date = event.target.querySelector('#date').value;
  const project = event.target.querySelector('#project').value;
  const description = event.target.querySelector('#description').value;
  const index = document.querySelector('input[type = "hidden"]').value;

  const task = taskFactory(title, description, date, project, index);

  tasks[index] = task;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateEventListeners();

  editTaskForm.reset();
  editTaskDialog.close();
  loadPage(project, filterTasksByProject(tasks, project), bluePlus);
  updateEventListeners();
});

projectLinks.forEach((link) => {
  link.addEventListener(('click'), () => {
    const project = link.textContent;
    if (project === 'Home') {
      loadPage(project, tasks, bluePlus);
      updateEventListeners();
    } else {
      loadPage(project, filterTasksByProject(tasks, project), bluePlus);
      updateEventListeners();
    }
  });
});

updateEventListeners();
