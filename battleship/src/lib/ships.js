import carrierImage from './images/battleships-20.png'
import carrier1 from './images/battleships-01.png'
import carrier2 from './images/battleships-02.png'
import carrier3 from './images/battleships-03.png'
import carrier4 from './images/battleships-04.png'
import carrier5 from './images/battleships-05.png'

import battleshipImage from './images/battleships-21.png'
import battleship1 from './images/battleships-06.png'
import battleship2 from './images/battleships-07.png'
import battleship3 from './images/battleships-08.png'
import battleship4 from './images/battleships-09.png'

import cruiserImage from './images/battleships-22.png'
import cruiser1 from './images/battleships-10.png'
import cruiser2 from './images/battleships-11.png'
import cruiser3 from './images/battleships-12.png'

import submarineImage from './images/battleships-23.png'
import submarine1 from './images/battleships-13.png'
import submarine2 from './images/battleships-14.png'
import submarine3 from './images/battleships-15.png'

import destroyerImage from './images/battleships-24.png'
import destroyer1 from './images/battleships-18.png'
import destroyer2 from './images/battleships-19.png'

import explosion from './images/explosion.png'

const carrier = {
    name: 'Carrier',
    length: 5,
    fullImage: carrierImage,
    images: [carrier1, carrier2, carrier3, carrier4, carrier5]
}

const battleship = {
    name: 'Battleship',
    length: 4,
    fullImage: battleshipImage,
    images: [battleship1, battleship2, battleship3, battleship4]
}

const cruiser = {
    name: 'Cruiser',
    length: 3,
    fullImage: cruiserImage,
    images: [cruiser1, cruiser2, cruiser3]
}

const submarine = {
    name: 'Submarine',
    length: 3,
    fullImage: submarineImage,
    images: [submarine1, submarine2, submarine3]
}

const destroyer = {
    name: 'Destroyer',
    length: 2,
    fullImage: destroyerImage,
    images: [destroyer1, destroyer2]
}

const ships = [
    carrier,
    battleship,
    cruiser,
    submarine,
    destroyer
]

const getShipImages = (shipName) => {
    const ship = ships.find((ship) => ship.name === shipName)
    return ship.images
}

const getExplosionImage = () => {
    return explosion
}

export {
    ships,
    getShipImages,
    getExplosionImage
}

