let footer = () => {
    let footer = document.createElement('footer');
    let footerText = document.createElement('p');

    footerText.innerText = 'Created by Enoch Hsu';
    footer.appendChild(footerText);

    let body = document.querySelector('body');
    body.appendChild(footer);
};

export default footer;