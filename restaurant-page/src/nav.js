let nav = () => {
    let nav = document.createElement('nav');

    let home = document.createElement('button');
    home.innerText = "HOME";
    home.id = 'home';

    let menu = document.createElement('button');
    menu.innerText = "MENU";
    menu.id = 'menu';

    let about = document.createElement('button');
    about.innerText = "ABOUT";
    about.id = 'about';

    let contact = document.createElement('button');
    contact.innerText = "CONTACT";
    contact.id = 'contact';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
    nav.appendChild(contact);

    return nav;
};

export default nav;