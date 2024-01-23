function Ship(length) {
    const ship = {
        length: length,
        hits: 0,
        sunk: false,
        hit() {
            this.hits += 1
        },
        isSunk() {
            if (this.hits === this.length) {
                this.sunk = true
            }
            return this.sunk
        }   
    }

    return ship;
}

module.exports = Ship