import { 
    drawGrid, 
    updateGrid,
    updateEventListeners
} from './lib/display'
import gameFactory from './lib/game'
import './style.css'

drawGrid()
drawGrid('computer')

const game = gameFactory();
game.setupGame();
console.log(game.currentPlayer)
updateGrid('player', game.player1.getBoard())
updateEventListeners('computer', game)