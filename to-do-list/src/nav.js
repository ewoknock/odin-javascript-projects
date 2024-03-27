import todoLogo from './images/icons8-clipboard-64.png'
import { getProjects } from './tasks';

let nav = (projects) => {
    let nav = document.createElement('aside');
    nav.id = 'sidebar';

    nav.appendChild(createNavHeader());
    nav.appendChild(createNavContent(projects));

    return nav;
};

export default nav;

let createNavHeader = () => {
    let navHeader = document.createElement('div');
    navHeader.classList.add('navHeader');

    let logo = new Image();
    logo.src = todoLogo;

    let header = document.createElement('h1');
    header.innerText = 'To Do\'s'

    navHeader.appendChild(logo);
    navHeader.appendChild(header);

    return navHeader;
}

let createNavContent = (projects) => {
    let navContent = document.createElement('ul');
    navContent.classList.add('project-list');

    console.log(projects);

    let home = document.createElement('li');
    home.classList.add('project-link');
    home.id = 'home';
    home.innerText = "Home";

    navContent.appendChild(home);

    projects.forEach(project => {
        navContent.appendChild(createProjectLink(project));
    });

   return navContent;
}

let createProjectLink = (project) => {
    let listItem = document.createElement('li');
    listItem.classList.add('project-link');
    listItem.innerText = project;

    return listItem;
}