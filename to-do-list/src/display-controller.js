import AddIcon from './images/icons8-add-50.png';
import EditIcon from './images/icons8-edit-32.png';

const bluePlus = '\u2295';
const blueMinus = '\u2296';

const pageNav = (header) => {
  const nav = document.createElement('nav');

  const navHeader = document.createElement('h2');
  navHeader.innerText = header;

  const buttonIcon = new Image();
  buttonIcon.src = AddIcon;

  const addTaskButton = document.createElement('button');
  addTaskButton.classList.add('taskBtn');
  addTaskButton.id = 'new-task-button';
  addTaskButton.appendChild(buttonIcon);

  nav.appendChild(navHeader);
  nav.appendChild(addTaskButton);

  return nav;
};

const createCardDetailInfo = (label, content) => {
    const detailContainer = document.createElement('div');
    detailContainer.classList.add('card-content-detail-info');
  
    if (label !== '') {
      const containerLabel = document.createElement('p');
      containerLabel.innerHTML = `<strong>${label}</strong>`;
      detailContainer.appendChild(containerLabel);
    }
  
    const containerContent = document.createElement('p');
    containerContent.innerText = content;
  
    detailContainer.appendChild(containerContent);
  
    return detailContainer;
  };

const createCardHeader = (item) => {
  const cardContentHeader = document.createElement('div');
  cardContentHeader.classList.add('card-content-header');

  const completedContainer = document.createElement('input');
  completedContainer.setAttribute('data-index', item.id);
  completedContainer.classList.add('complete-checkbox');
  completedContainer.type = 'checkbox';
  completedContainer.checked = item.completed;

  const titleInfo = createCardDetailInfo('', item.title);

  const dateInfo = createCardDetailInfo('', item.dueDate);

  const expandButton = document.createElement('button');
  expandButton.classList.add('collapse-button');
  expandButton.id = 'expand-button';
  expandButton.textContent = bluePlus;

  cardContentHeader.appendChild(completedContainer);
  cardContentHeader.appendChild(titleInfo);
  cardContentHeader.appendChild(dateInfo);
  cardContentHeader.appendChild(expandButton);

  return cardContentHeader;
};

const createCardDetails = (item) => {
  const cardContentDetails = document.createElement('div');
  cardContentDetails.classList.add('card-content-details');

  const dateInfo = createCardDetailInfo('Due Date:', item.dueDate);
  const projectInfo = createCardDetailInfo('Project:', item.project);
  const descriptionInfo = createCardDetailInfo('Description:', item.description);

  const editIcon = new Image();
  editIcon.src = EditIcon;

  const editButton = document.createElement('button');
  editButton.classList.add('edit-button');
  editButton.id = 'edit-button';
  editButton.appendChild(editIcon);
  editButton.setAttribute('data-index', item.id);

  cardContentDetails.appendChild(dateInfo);
  cardContentDetails.appendChild(projectInfo);
  cardContentDetails.appendChild(descriptionInfo);
  cardContentDetails.appendChild(editButton);

  return cardContentDetails;
};

const createTaskCard = (item) => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
  
    cardContent.appendChild(createCardHeader(item));
    cardContent.appendChild(createCardDetails(item));
  
    card.appendChild(cardContent);
  
    return card;
  };
  
const populateTasks = (arr) => {
  const tasks = document.createElement('section');
  tasks.classList.add('tasks-container');

  arr.forEach((item) => {
    tasks.appendChild(createTaskCard(item));
  });

  return tasks;
};

const loadPage = (title, arr) => {
    const main = document.querySelector('main');
  
    let content = document.querySelector('section');
  
    if (main.contains(content)) {
      content.innerHTML = '';
    } else {
      content = document.createElement('section');
      content.classList.add('container');
    }
  
    content.appendChild(pageNav(title));
  
    const tasks = populateTasks(arr);
  
    content.appendChild(tasks);
  
    main.appendChild(content);
  };

const populateDialog = (item) => {
  const form = document.querySelector('#edit-task-form');

  const hidden = document.createElement('input');
  hidden.type = 'hidden';
  hidden.value = item.id;

  form.appendChild(hidden);

  const title = form.querySelector('#title');
  title.value = item.title;
  const date = form.querySelector('#date');
  date.value = item.dueDate;
  const project = form.querySelector('#project');
  project.value = item.project;
  const description = form.querySelector('#description');
  description.value = item.description;
};

export {
  loadPage, bluePlus, blueMinus, populateDialog,
};
