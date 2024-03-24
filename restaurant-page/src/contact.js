
let contact = () => {
    let content = document.querySelector('body');
    
    let contact = document.getElementById('contact');
    contact.classList.add('active');

    let container = document.createElement('main');
    container.classList.add('container');

    let header = document.createElement('h1');
    header.innerText = 'Menu Placeholder';
    container.appendChild(header);


    content.insertBefore(container, document.querySelector('footer'));

}
export default contact