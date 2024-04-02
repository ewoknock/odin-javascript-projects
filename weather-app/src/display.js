const clearContent = () => {
    const content = document.querySelector('.content')
    while (content.firstChild){
        content.firstChild.remove();
    }
}

const addContent = (content) => {
    const main = document.querySelector('main');
    main.append(content)
}

export{
    clearContent,
    addContent
}