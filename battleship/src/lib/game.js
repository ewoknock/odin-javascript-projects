import shipFactory from "./ship"
import player from "./player"
import { createAlert, placeShips } from "./display"

const gameFactory = () => {
    const game = {
        currentPlayer: null,
        enemyBoard: null,
        player1: null,
        player2: null,
        changePlayer() {
            this.enemyBoard = this.currentPlayer.getBoard()
            this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1
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
                    ship.orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical'
                    try{
                        board.placeShip(ship, coordinates)
                        validPlacement = true
                    } catch(error){
                        validPlacement = false
                    }
                }
            })
        },
        attack(coordinates){
            return this.currentPlayer.attack(this.enemyBoard, coordinates)
        },
        computerAttack(hits = 0){
            const coordinates = [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10)
            ]
            if(this.enemyBoard.missedAttacks.some((missedAttack) => missedAttack[0] === coordinates[0] && missedAttack[1] === coordinates[1])){
                this.computerAttack()
            } else{
                const attack = this.attack(coordinates)
                if(attack === 'hit'){
                    this.computerAttack(hits+1)
                    return 'hit'
                }
            }
            if(hits === 0){
                return 'miss'
            }
            return hits
        },
        setupGame(){
            this.player1 = player()
            this.player2 = player()
            placeShips(this, 0)
            this.randomShipPlacement(this.player2.getBoard())
            this.currentPlayer = this.player1
            this.enemyBoard = this.player2.getBoard()
            createAlert("Welcome to Battleship!")
        },
        gameEnd(){
            if(this.player1.getBoard().allShipsSunk()){
                return 'Computer wins'
            }
            if(this.player2.getBoard().allShipsSunk()){
                return 'Player wins'
            }
            return false
        },
        playGame(){
            while(!this.gameEnd()){

            }
        }
    }
    return game
}

export default gameFactory