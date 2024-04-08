import shipFactory from './ship'

test('shipFactory returns an object', () => {
    expect(typeof shipFactory()).toBe('object')
})

test('shipFactory object has a length property', () => {
    expect(shipFactory()).toHaveProperty('length')
})

test('shipFactory object has a hits property', () =>{
    expect(shipFactory()).toHaveProperty('hits')
})

test('shipFactory object has an isSunk property', () =>{
    expect(shipFactory()).toHaveProperty('isSunk')
})

test('shipFactory object has a hit property', () =>{
    expect(shipFactory()).toHaveProperty('isSunk')
})

test('shipFactory object has a name property', () =>{
    expect(shipFactory()).toHaveProperty('name')
})

test('shipFactory object has a length property equal to the length of the ship', () => {
    expect(shipFactory("Cruiser", 3).length).toBe(3)
})

test('shipFactory object has a hit count of 0 for a new ship', () => {
    expect(shipFactory("Cruiser", 3).hits.length).toBe(0)
})

test('shipFactory object has a hit method that increments the hits property', () => {
    const ship = shipFactory("Cruiser", 3)
    ship.hit(1)
    expect(ship.hits.length).toEqual(1)
})

test('shipFactory object has a hit method that does not increment past the length of the ship', () => {
    const ship = shipFactory("Cruiser", 3)
    ship.hit()
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.hits.length).toEqual(3)
})

test('shipFactory object has an isSunk property that is false when the ship is not sunk', () => {
    const ship = shipFactory("Cruiser", 3)
    expect(ship.isSunk()).toBe(false)
})

test('shipFactory object has an isSunk property that is false when the ship is hit but not sunk', () => {
    const ship = shipFactory("Cruiser", 3)
    ship.hit()
    expect(ship.isSunk()).toBe(false)
})

test('shipFactory object has an isSunk property that is true when the ship is completely hit', () => {
    const ship = shipFactory("Cruiser", 3)
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBe(true)
})