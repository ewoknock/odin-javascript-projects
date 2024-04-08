const generateShipCoordinates = (ship, coordinates, orientation) => {
    const [x, y] = coordinates
    const shipCoordinates = []
    for(let i = 0; i < ship.length; i++){
        orientation === 'horizontal' ? shipCoordinates.push([x + i, y]) : shipCoordinates.push([x, y + i])
    }
    return shipCoordinates
}

const coordinatesOnBoard = (shipCoordinates) => {
    let onBoard = false;
    onBoard = shipCoordinates.every((coordinate) => {
        const [x,y] = coordinate;
        return x >= 0 && x <= 9 && y >= 0 && y <= 9
    })
    return onBoard
}

const coordinatesDoNotOverlap = (ships, shipCoordinates) => {
    ships.forEach((ship) => {
        shipCoordinates.forEach((coordinate) => {
            if(ship.coordinates.some((coord) => coordinate.every((v, i) => v === coord[i]))){
                throw new Error('Ships cannot overlap with other ships')
            }
        })
    })
}

const validateCoordinates = (ships, shipCoordinates) => {
    let validCoordinates = false;
    validCoordinates = coordinatesOnBoard(shipCoordinates)
    if(validCoordinates){
        coordinatesDoNotOverlap(ships, shipCoordinates)
    }

    return validCoordinates
}


const gameBoard = () => {
    const board = {
        ships: [],
        missedAttacks: [],
        allShipsSunk(){},
        placeShip(ship, coordinates, orientation){
            ship.coordinates = generateShipCoordinates(ship, coordinates, orientation)
            if(!validateCoordinates(this.ships, ship.coordinates)){
                throw new Error('Ships cannot be placed off the board')
            }
            this.ships.push(ship)
        },
        receiveAttack(){}
    }
    return board
}

export default gameBoard