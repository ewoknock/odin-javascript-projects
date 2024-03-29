const taskFactory = (title, description, dueDate, project, id) => ({
        title, 
        description, 
        dueDate, 
        project, 
        id,
        completed: false
    })

const setId = (arr, index) => {
    arr[index].id = index;   
}

const getProjects = (arr) => {
    const projects = arr.map(task => task.project);
    return projects.filter((project, index) => projects.indexOf(project) === index);
}

const toggleCompleted = (arr, index) => {
    console.log(arr);
    console.log(index);
    arr[index].completed = !arr[index].completed;   
}

const filterTasksByProject = (arr, project = "") => {
    const tasks = arr.filter(task => task.project === project);
    return tasks;
}

export { taskFactory, getProjects, toggleCompleted, filterTasksByProject, setId }