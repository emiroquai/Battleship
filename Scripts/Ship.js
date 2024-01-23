function Ship(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false

    const hit = () => {
        this.hits++;
    }

    const isSunk = () => {
        if (this.hits === this.length) {
            this.isSunk = true
        }
        return this.sunk
    }

    return {
        length,
        hits,
        sunk,
    }
}

module.exports = Ship