import menuCard from './menu_card';
import ribEyeA5 from './images/rib-eye-a5.png';
import ribEyeUS from './images/rib-eye-us.png';
import ribEyePrime from './images/rib-eye-prime.png';
import bonelessShortRibA5 from './images/boneless-short-rib-a5.png';
import bonelessShortRib from './images/boneless-short-rib.png';
import boneInShortRib from './images/prime-bone-in-short-rib.png';
import boneInShortRibMarinated from './images/marinated-prime-bone-in-short-rib.png';
import primeOutsideSkirt from './images/prime-outside-skirt.png';
import wagyuBrisket from './images/us-wagyu-brisket.png';
import wagyuChuckFlap from './images/us-wagyu-chuck-flap.png';

let menu = () => {
    let content = document.querySelector('body');
    
    let menu = document.getElementById('menu');
    menu.classList.add('active');

    let container = document.createElement('main');
    container.classList.add('container');
    container.classList.add('menu');

    let header = document.createElement('h1');
    header.innerText = 'BEEF';
    container.appendChild(header);

    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    cardContainer.appendChild(menuCard('Rib Eye A5 Wagyu - 6oz', '$110.00', ribEyeA5));
    cardContainer.appendChild(menuCard('Rib Eye US Wagyu - 7oz', '$70.00', ribEyeUS));
    cardContainer.appendChild(menuCard('Rib Eye Prime - 12oz', '$65.00', ribEyePrime))
    cardContainer.appendChild(menuCard('Boneless Short Rib A5 Wagyu', '$95.00', bonelessShortRibA5))
    cardContainer.appendChild(menuCard('Boneless Short Rib US Wagyu', '$55.00', bonelessShortRib))
    cardContainer.appendChild(menuCard('Prime Bone in Short Rib', '$85.00', boneInShortRib))
    cardContainer.appendChild(menuCard('Marinated Prime Bone in Short Rib', '$85.00', boneInShortRibMarinated))
    cardContainer.appendChild(menuCard('Prime Outside Skirt', '$45.00', primeOutsideSkirt))
    cardContainer.appendChild(menuCard('US Wagyu Brisket', '$38.00', wagyuBrisket))
    cardContainer.appendChild(menuCard('US Wagyu Chuck Flap', '$55.00', wagyuChuckFlap))




    container.appendChild(cardContainer);
    content.insertBefore(container, document.querySelector('footer'));

}
export default menu