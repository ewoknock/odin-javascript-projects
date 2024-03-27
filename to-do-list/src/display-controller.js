import AddIcon from './images/icons8-add-50.png'

const bluePlus = '\u2295';
const blueMinus = '\u2296'

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

    arr.forEach((item, index) => {
        tasks.appendChild(createTaskCard(item, index));
    });

    return tasks;
}

const createTaskCard = (item, index) => {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    cardContent.appendChild(createCardHeader(item, index));
    cardContent.appendChild(createCardDetails(item));

    card.appendChild(cardContent);

    return card;
}

const createCardHeader = (item, index) => {
    let cardContentHeader = document.createElement('div');
    cardContentHeader.classList.add('card-content-header');

    let completedContainer = document.createElement('input');
    completedContainer.setAttribute('data-index', index);
    completedContainer.classList.add('complete-checkbox');
    completedContainer.type = "checkbox"
    completedContainer.checked = item.completed;

    let titleInfo = createCardDetailInfo("", item.title);

    let dateInfo = createCardDetailInfo("", item.dueDate);

    
    let expandButton = document.createElement('button');
    expandButton.classList.add("collapse-button");
    expandButton.id = "expand-button";
    expandButton.textContent = bluePlus;


    cardContentHeader.appendChild(completedContainer);
    cardContentHeader.appendChild(titleInfo);
    cardContentHeader.appendChild(dateInfo);
    cardContentHeader.appendChild(expandButton);

    return cardContentHeader;
}

const createCardDetails = (item) => {
    let cardContentDetails = document.createElement('div');
    cardContentDetails.classList.add('card-content-details');

    let dateInfo = createCardDetailInfo("Due Date:", item.dueDate);
    let projectInfo = createCardDetailInfo("Project:", item.project);
    let descriptionInfo = createCardDetailInfo("Description:", item.description);

    cardContentDetails.appendChild(dateInfo);
    cardContentDetails.appendChild(projectInfo);
    cardContentDetails.appendChild(descriptionInfo);

    return cardContentDetails;
}

const createCardDetailInfo = (label, content) => {

    let detailContainer = document.createElement('div');
    detailContainer.classList.add("card-content-detail-info");

    if(label != ""){
        let containerLabel = document.createElement('p');
        containerLabel.innerHTML= `<strong>${label}</strong>`;
        detailContainer.appendChild(containerLabel);
    }


    let containerContent = document.createElement('p');
    containerContent.innerText = content;

    detailContainer.appendChild(containerContent);

    return detailContainer;
}

export { loadPage, bluePlus, blueMinus }