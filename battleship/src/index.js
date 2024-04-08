import { 
    drawGrid, 
    updateGrid 
} from './lib/display'
import gameFactory from './lib/game'
import './style.css'

drawGrid()
drawGrid('computer')

const game = gameFactory();
game.randomShipPlacement(game.player1Board)
game.randomShipPlacement(game.player2Board)
console.log(game.player1Board)

updateGrid('player', game.player1Board)