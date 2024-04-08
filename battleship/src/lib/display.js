const updateGrid = (type = 'player', gameBoard) => {
    console.log(gameBoard)
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    const { ships } = gameBoard;

    ships.forEach((ship) => {
        for(let i = 0; i < ship.length; i++){
            const cell = board.querySelector(`[data-x="${ship.coordinates[i][0]}"][data-y="${ship.coordinates[i][1]}"]`)
            cell.classList.add('ship')
        }
    })
}


const drawGrid = (type = 'player') => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    board.innerHTML = ''

    for(let i = 0 ; i < 100; i++){
        const cell = document.createElement('div')
        cell.classList.add('grid-cell')
        board.appendChild(cell)

        cell.setAttribute('data-x', i % 10)
        cell.setAttribute('data-y', Math.floor( i / 10))
    }
}

export {
    drawGrid,
    updateGrid
}