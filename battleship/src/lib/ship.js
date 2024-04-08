const shipFactory = (name, length) => {
    const ship = {
        name,
        length,
        hits: [],
        isSunk() {
            return this.hits.length === this.length
        },
        hit(coordinate){
            if(this.hits.length < this.length){
                this.hits.push(coordinate)
            }
        }
    }

    return ship
}

export default shipFactory