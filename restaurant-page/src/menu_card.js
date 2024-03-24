let menuCard = (item, price, img) => {
    let card = document.createElement('div');
    card.classList.add('card');

    let cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    let itemContainer = document.createElement('p');
    itemContainer.innerText = item;

    let priceContainer = document.createElement('p');
    priceContainer.innerText = price;

    let imgContainer = new Image();
    imgContainer.src = img;
    console.log(imgContainer);

    cardContent.appendChild(itemContainer);
    cardContent.appendChild(priceContainer);

    card.appendChild(cardContent);
    card.appendChild(imgContainer);

    return card;
};

export default menuCard;