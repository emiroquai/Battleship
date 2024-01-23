const { execPath } = require('process')
const Ship = require('../Scripts/Ship')

test ('Ship factory creates a ship object with given length', () => {
    let ship1 = Ship(4)
    expect(ship1).toEqual(
        {length: 4, hits: 0, sunk: false}
    )
});