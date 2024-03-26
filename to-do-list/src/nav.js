import todoLogo from './images/icons8-clipboard-64.png'

let nav = () => {
    let nav = document.createElement('aside');
    nav.id = 'sidebar';

    nav.appendChild(createNavHeader());
    nav.appendChild(createNavContent());



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

let createNavContent = () => {
    let navContent = document.createElement('ul');
    navContent.classList.add('project-list');

    let home = document.createElement('li');
    home.classList.add('project-link');
    home.innerText = "Home";

    navContent.appendChild(home);

    let placeholder = document.createElement('li');
    placeholder.classList.add('project-link');
    placeholder.innerText = "Placeholder";

    navContent.appendChild(placeholder);

    return navContent;
}