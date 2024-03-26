import AddIcon from './images/icons8-add-50.png'

const loadPage = (title, arr) => {
    let main = document.querySelector('main');

    let content = document.createElement('section');
    content.classList.add('container');
    
    content.appendChild(pageNav(title));

    let tasks = document.createElement('section');
    tasks.classList.add('tasks-container');

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
    addTaskButton.classList.add('btn', 'taskBtn');
    addTaskButton.appendChild(buttonIcon);

    nav.appendChild(navHeader);
    nav.appendChild(addTaskButton);

    return nav;

}

export { loadPage }