
let contact = () => {
    let content = document.querySelector('body');
    
    let contact = document.getElementById('contact');
    contact.classList.add('active');

    let container = document.createElement('main');
    container.classList.add('container');

    let header = document.createElement('h1');
    header.innerText = 'Contact';
    container.appendChild(header);

    let emailLine = document.createElement('p');
    emailLine.innerText = `10kbbq@example.com`;
    container.appendChild(emailLine);

    let phoneNumberLine = document.createElement('p');
    phoneNumberLine.innerText = `(xxx)xxx-xxxx`;
    container.appendChild(phoneNumberLine);

    content.insertBefore(container, document.querySelector('footer'));

}
export default contact