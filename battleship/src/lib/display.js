const updateGrid = (type = 'player', gameBoard) => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    const { ships, missedAttacks } = gameBoard;

    if(type === 'player'){
        ships.forEach((ship) => {
            for(let i = 0; i < ship.length; i++){
                const cell = board.querySelector(`[data-x="${ship.coordinates[i][0]}"][data-y="${ship.coordinates[i][1]}"]`)
                cell.classList.add('ship')
            }
        })
    }

    missedAttacks.forEach((coordinate) => {
        const cell = board.querySelector(`[data-x="${coordinate[0]}"][data-y="${coordinate[1]}"]`)
        cell.classList.add('miss')
    })

    ships.forEach((ship) => {
        ship.hits.forEach((coordinate) => {
            const cell = board.querySelector(`[data-x="${coordinate[0]}"][data-y="${coordinate[1]}"]`)
            cell.classList.add("hit")

        })
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

function makeAttack(event){
    const cell = event.target
    const gameInstance = event.target.gameInstance
    const x = parseInt(cell.getAttribute('data-x'))
    const y = parseInt(cell.getAttribute('data-y'))
    try{
        const attack = gameInstance.attack([x,y])
        console.log(attack)
        if(attack === 'hit'){
            cell.classList.add('hit')
            cell.removeEventListener('click', makeAttack)
        }else if(attack === 'miss'){
            cell.removeEventListener('click', makeAttack)
            gameInstance.changePlayer()
            gameInstance.computerAttack()
            gameInstance.changePlayer()
            updateGrid('player', gameInstance.player1.getBoard())
            updateGrid('computer', gameInstance.player2.getBoard())
        }

    }catch(e){

    }
}

const updateEventListeners = (type = 'player', gameInstance) => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    const cells = board.querySelectorAll('.grid-cell')
    cells.forEach((cell) => {
        if(!cell.classList.contains('hit') && !cell.classList.contains('miss')){
            cell.addEventListener('click', makeAttack)
            cell.gameInstance = gameInstance
        }

    })
}

export {
    drawGrid,
    updateGrid,
    updateEventListeners
}