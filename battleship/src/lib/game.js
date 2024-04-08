import gameBoard from "./gameBoard"
import shipFactory from "./ship"

const gameFactory = () => {
    const game = {
        player: 1,
        player1Board: gameBoard(),
        player2Board: gameBoard(),
        changePlayer() {
            this.player = this.player === 1 ? 2 : 1
        },
        randomShipPlacement(board) {
            const ships = [
                shipFactory('Carrier', 5), 
                shipFactory('Battleship', 4),
                shipFactory('Cruiser', 3),
                shipFactory('Submarine', 3),
                shipFactory('Destroyer', 2)
            ]
            ships.forEach((ship) => {
                let coordinates = []
                let orientation = ''
                let validPlacement = false;
                while(!validPlacement){
                    coordinates = [
                        Math.floor(Math.random() * 10),
                        Math.floor(Math.random() * 10)
                    ]
                    orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical'
                    try{
                        board.placeShip(ship, coordinates, orientation)
                        validPlacement = true
                    } catch(error){
                        validPlacement = false
                    }
                }
            })
        }
    }
    return game
}

export default gameFactory