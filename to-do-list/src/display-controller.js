import AddIcon from './images/icons8-add-50.png'
import EditIcon from './images/icons8-edit-32.png'

const bluePlus = '\u2295';
const blueMinus = '\u2296'

const loadPage = (title, arr) => {
    let main = document.querySelector('main');
    
    let content = document.querySelector('section');

    if(main.contains(content)){
        content.innerHTML = "";
    }
    else{
        content = document.createElement('section');
        content.classList.add('container');
    }

    
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

    cardContent.appendChild(createCardHeader(item));
    cardContent.appendChild(createCardDetails(item));

    card.appendChild(cardContent);

    return card;
}

const createCardHeader = (item) => {
    let cardContentHeader = document.createElement('div');
    cardContentHeader.classList.add('card-content-header');

    let completedContainer = document.createElement('input');
    completedContainer.setAttribute('data-index', item.id);
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
    console.log(item);
    let cardContentDetails = document.createElement('div');
    cardContentDetails.classList.add('card-content-details');

    let dateInfo = createCardDetailInfo("Due Date:", item.dueDate);
    let projectInfo = createCardDetailInfo("Project:", item.project);
    let descriptionInfo = createCardDetailInfo("Description:", item.description);

    let editIcon = new Image();
    editIcon.src = EditIcon;

    let editButton = document.createElement('button');
    editButton.classList.add("edit-button");
    editButton.id = "edit-button";
    editButton.appendChild(editIcon); 
    editButton.setAttribute("data-index", item.id);

    cardContentDetails.appendChild(dateInfo);
    cardContentDetails.appendChild(projectInfo);
    cardContentDetails.appendChild(descriptionInfo);
    cardContentDetails.appendChild(editButton);

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

const populateDialog = (item) => {
    let form = document.querySelector("#edit-task-form");

    let hidden = document.createElement('input');
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

}

export { loadPage, bluePlus, blueMinus, populateDialog }