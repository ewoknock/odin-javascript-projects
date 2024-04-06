const shipFactory = (length) => {
    const ship = {
        length,
        hits: 0,
        isSunk() {
            return this.hits === this.length
        },
        hit(){
            if(this.hits < length)
                this.hits++
        }
    }

    return ship
}

export default shipFactory