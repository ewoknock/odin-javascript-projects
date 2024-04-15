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
game.setupGame()
updateGrid('player', game.player1.getBoard())
updateGrid('computer', game.player2.getBoard())
