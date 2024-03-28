const taskFactory = (title, description, dueDate, project, id) => {
    return {
        title, 
        description, 
        dueDate, 
        project, 
        id,
        completed: false
    }
}

const setId = (arr, index) => {
    arr[index].id = index;   
}

const getProjects = (arr) => {
    let projects = arr.map(task => task.project);
    return projects.filter((project, index) => projects.indexOf(project) === index);
}

const toggleCompleted = (arr, index) => {
    arr[index].completed = !arr[index].completed;   
}

const filterTasksByProject = (arr, project = "") => {
    let tasks = arr.filter(task => task.project === project);
    return tasks;
}

export { taskFactory, getProjects, toggleCompleted, filterTasksByProject, setId }