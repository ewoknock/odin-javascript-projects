import gameBoard from './gameBoard.js'
import shipFactory from './ship.js'

test('gameBoard returns an object', () => {
    let board = gameBoard()

    expect(typeof board).toBe('object')
})

test('gameBoard has a ships property', () => {
    let board = gameBoard()

    expect(board).toHaveProperty('ships')
})

test('gameBoard has a placeShip property', () => {
    let board = gameBoard()

    expect(board).toHaveProperty('placeShip')
})

test('gameBoard has a receiveAttack property', () => {
    let board = gameBoard()

    expect(board).toHaveProperty('receiveAttack')
})

test('gameBoard has a missedAttacks property', () => {
    let board = gameBoard()

    expect(board).toHaveProperty('missedAttacks')
})

test('gameBoard has a allShipsSunk property', () => {
    let board = gameBoard()

    expect(board).toHaveProperty('allShipsSunk')
})

test('gameBoard places a ship on the board', () => {
    let board = gameBoard()

    const ship = shipFactory("Cruiser", 3)
    board.placeShip(ship, [0,0], 'horizontal')
    expect(board.ships.length).toBe(1)
})

test('gameBoard errors when placing a ship off the board', () => {
    let board = gameBoard()

    const ship = shipFactory("Cruiser", 3)
    expect(() => board.placeShip(ship, [10,10], 'horizontal')).toThrow()
})

test('gameBoard errors when placing a ship on top of another ship', () => {
    let board = gameBoard()

    const ship1 = shipFactory("Cruiser", 3)
    const ship2 = shipFactory("Submarine", 3)
    board.placeShip(ship1, [3,3], 'horizontal')
    expect(() => board.placeShip(ship2, [4,3], 'horizontal')).toThrow()
})

test('gameBoard can place multiple ships', () => {
    let board = gameBoard()

    const ship1 = shipFactory("Cruiser", 3)
    const ship2 = shipFactory("Submarine", 3)
    board.placeShip(ship1, [3,3], 'horizontal')
    board.placeShip(ship2, [3,4], 'horizontal')
    expect(board.ships.length).toBe(2) 
})

test('gameBoard can receive an attack and return the coordinates of the hit', () => {
    let board = gameBoard()

    const ship1 = shipFactory("Cruiser", 3)
    board.placeShip(ship1, [3,3], 'horizontal')
    board.receiveAttack([3,3])
    expect(board.ships[0].hits).toEqual([[3,3]])
})

test('gameBoard can receive an attack and return the coordinates of the missed hit', () => {
    let board = gameBoard()

    const ship1 = shipFactory("Cruiser", 3)
    board.placeShip(ship1, [3,3], 'horizontal')
    board.receiveAttack([2,2])
    expect(board.missedAttacks).toEqual([[2,2]])
})