import todoLogo from './images/icons8-clipboard-64.png';

const createNavHeader = () => {
    const navHeader = document.createElement('div');
    navHeader.classList.add('navHeader');
  
    const logo = new Image();
    logo.src = todoLogo;
  
    const header = document.createElement('h1');
    header.innerText = 'To Do\'s';
  
    navHeader.appendChild(logo);
    navHeader.appendChild(header);
  
    return navHeader;
  };

  const createProjectLink = (project) => {
    const listItem = document.createElement('li');
    listItem.classList.add('project-link');
    listItem.innerText = project;
  
    return listItem;
  };

  const createNavContent = (projects) => {
    const navContent = document.createElement('ul');
    navContent.classList.add('project-list');
    
    const home = document.createElement('li');
    home.classList.add('project-link');
    home.id = 'home';
    home.innerText = 'Home';
  
    navContent.appendChild(home);
  
    projects.forEach((project) => {
      navContent.appendChild(createProjectLink(project));
    });
  
    return navContent;
  };
  
const nav = (projects) => {
  const sideBar = document.createElement('aside');
  sideBar.id = 'sidebar';

  sideBar.appendChild(createNavHeader());
  sideBar.appendChild(createNavContent(projects));

  return sideBar;
};

export default nav;





