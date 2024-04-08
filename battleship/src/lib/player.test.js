import Player from './player'
import shipFactory from './ship'

test('Player returns an object', () => {
    let p = Player()

    expect(typeof p).toBe('object')
})

test('Player can attack enemy gameBoard and miss', () => {
    const player = Player()
    const enemy = Player()
    const enemyBoard = enemy.getBoard()
    player.attack(enemyBoard, [0, 0])
    expect(enemyBoard.missedAttacks).toEqual([[0,0]])
})

test('Player attacks enemy board and hits', () => {
    const player = Player()
    const enemy = Player()
    const enemyBoard = enemy.getBoard()
    const ship1 = shipFactory("Cruiser", 3)
    enemyBoard.placeShip(ship1, [3,3], 'horizontal')
    player.attack(enemyBoard, [3, 3])
    expect(enemyBoard.missedAttacks).toEqual([])
    expect(enemyBoard.ships[0].hits).toEqual([[3,3]])
})

test('Player can attack enemy board and sink a ship', () => {
    const player = Player()
    const enemy = Player()
    const enemyBoard = enemy.getBoard()

    const ship1 = shipFactory("Cruiser", 3)
    enemyBoard.placeShip(ship1, [3,3], 'horizontal')
    player.attack(enemyBoard, [3,3])
    player.attack(enemyBoard, [4,3])
    player.attack(enemyBoard, [5,3])
    expect(enemyBoard.ships[0].isSunk()).toBe(true)
})

test('Player can attack enemy board and sink all ships', () => {
    const player = Player()
    const enemy = Player()
    const enemyBoard = enemy.getBoard()

    const ship1 = shipFactory("Cruiser", 3)
    enemyBoard.placeShip(ship1, [3,3], 'horizontal')
    player.attack(enemyBoard, [3,3])
    player.attack(enemyBoard, [4,3])
    player.attack(enemyBoard, [5,3])
    expect(enemyBoard.allShipsSunk()).toBe(true)
})