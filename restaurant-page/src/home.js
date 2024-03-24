import nav from './nav';
import footer from './footer';

let home = () => {
    let content = document.getElementById('content');
    
    if(!document.querySelector('nav')){
        let navbar = nav();
        content.appendChild(navbar);
    }
    let home = document.getElementById('home');
    home.classList.add('active');


    if(!document.querySelector('footer')){
        footer();
    }
}
export default home