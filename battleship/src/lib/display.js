const updateGrid = (type = 'player', gameBoard) => {
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

const updateEventListeners = (type = 'player', gameInstance) => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    const cells = board.querySelectorAll('.grid-cell')
    cells.forEach((cell) => {
        if(!cell.classList.contains('hit') && !cell.classList.contains('miss')){
            cell.addEventListener('click', () => {
                const x = parseInt(cell.getAttribute('data-x'))
                const y = parseInt(cell.getAttribute('data-y'))

                try{
                    const attack = gameInstance.attack(x, y)
                    console.log(attack)
                    if(attack === 'hit'){
                        cell.classList.add('hit')
                    }else if(attack === 'miss'){
                        cell.classList.add('miss')
                    }

                }catch(e){

                }
            })
        }

    })
}

export {
    drawGrid,
    updateGrid,
    updateEventListeners
}