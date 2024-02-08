function Ship(length) {
    const ship = {
        id: Math.floor(Math.random() * 100),
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

export default Ship;