// const { execPath } = require('process')
// const Ship = require('../Scripts/Ship')
import Ship from "../Scripts/Ship";

test ('Ship factory creates a ship object with given length', () => {
    let ship1 = Ship(4)
    expect(ship1.length).toBe(4)
    expect(ship1.hits).toBe(0)
    expect(ship1.sunk).toBe(false)
});


test ('Hit function increments the hit count of the ship', () => {
    let ship1 = Ship(4)
    ship1.hit()
    expect(ship1.hits).toBe(1)
});

test ('isSunk calculates if the ship is sunk and updates and returns the sunk property', () => {
    let ship1 = Ship(2)
    expect(ship1.isSunk()).toBe(false);

    ship1.hit()
    expect(ship1.isSunk()).toBe(false);

    ship1.hit()
    expect(ship1.isSunk()).toBe(true);
});