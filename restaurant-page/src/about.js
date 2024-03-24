
let about = () => {
    let content = document.querySelector('body');
    
    let about = document.getElementById('about');
    about.classList.add('active');

    let container = document.createElement('main');
    container.classList.add('container');

    let header = document.createElement('h1');
    header.innerText = 'About Placeholder';
    container.appendChild(header);


    content.insertBefore(container, document.querySelector('footer'));

}
export default about