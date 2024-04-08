import gameBoard from './gameBoard'

const player = () => {
    const board = gameBoard()

    const getBoard = () => board
    
    const attack = (enemyBoard, coordinates) => {
        enemyBoard.receiveAttack(coordinates)
    }
    return { getBoard, attack }
}

export default player