import AddIcon from './images/icons8-add-50.png'

const loadPage = (title, arr) => {
    console.log(arr);
    let main = document.querySelector('main');

    let content = document.createElement('section');
    content.classList.add('container');
    
    content.appendChild(pageNav(title));

    let tasks = populateTasks(arr);

    content.appendChild(tasks);

    main.appendChild(content);

}

const pageNav = (header) => {
    let nav = document.createElement('nav');

    let navHeader = document.createElement('h2');
    navHeader.innerText = header;

    let buttonIcon = new Image();
    buttonIcon.src = AddIcon;
    console.log(buttonIcon);

    let addTaskButton = document.createElement('button');
    addTaskButton.classList.add('taskBtn');
    addTaskButton.id = "new-task-button"
    addTaskButton.appendChild(buttonIcon);

    nav.appendChild(navHeader);
    nav.appendChild(addTaskButton);

    return nav;

}

const populateTasks = (arr) => {
    let tasks = document.createElement('section');
    tasks.classList.add('tasks-container');

    arr.forEach((item) => {
        tasks.appendChild(createTaskCard(item));
    });

    return tasks;
}

const createTaskCard = (item) => {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    let titleContainer = document.createElement('p');
    titleContainer.innerText = item.title;

    let projectContainer = document.createElement('p');
    projectContainer.innerText = item.project;

    let dateContainer = document.createElement('p');
    dateContainer.innerText = item.dueDate;

    let descriptionContainer = document.createElement('p');
    descriptionContainer.innerText = item.description;

    let completedContainer = document.createElement('input');
    completedContainer.type = "checkbox"
    completedContainer.checked = item.completed;

    cardContent.appendChild(completedContainer);
    cardContent.appendChild(titleContainer);
    cardContent.appendChild(projectContainer);
    cardContent.appendChild(dateContainer);
    cardContent.appendChild(descriptionContainer);

    card.appendChild(cardContent);

    return card;
}

export { loadPage }