import getShipImages from './ships'
import shipFactory from "./ship"

const getCoordinatesFromCell = (cell) => {
    const x = parseInt(cell.getAttribute('data-x'))
    const y = parseInt(cell.getAttribute('data-y'))

    return {x, y}
}

const createAlert = (message) => {
    let alert = document.getElementById('alert')
    alert.innerHTML = `
        <div class="alert-message">
            <p class="message">${message}</p>
        </div>
        `
    }
 
const createResetButton = () => {
    const resetButton = document.createElement('button')
    resetButton.classList.add('reset')
    resetButton.textContent = "Reset Game"
    resetButton.addEventListener('click', () => {
        window.location.reload()
    })
    alert = document.getElementById('alert')
    alert.appendChild(resetButton)
}

const endGame = (winner) => {
    createAlert(winner)
    const cells = document.querySelectorAll('.grid-cell')
    cells.forEach((cell) => {
        cell.removeEventListener('click', makeAttack)
    })
    createResetButton()
}

const updateGrid = (type = 'player', gameBoard) => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    const { ships, missedAttacks } = gameBoard;

    ships.forEach((ship) => {
        const shipImages = getShipImages(ship.name)
        for(let i = 0; i < ship.length; i++){
            const cell = board.querySelector(`[data-x="${ship.coordinates[i][0]}"][data-y="${ship.coordinates[i][1]}"]`)
            cell.classList.add('ship')
            if(ship.orientation === 'vertical'){
                cell.style.transform = 'rotate(90deg)'
            }
            cell.style.backgroundImage = `url(${shipImages[i]})`
            if(type !== 'player'){
                cell.classList.add("hidden")
            }
        }
    })
 
    missedAttacks.forEach((coordinate) => {
        const cell = board.querySelector(`[data-x="${coordinate[0]}"][data-y="${coordinate[1]}"]`)
        cell.classList.add('miss')
    })

    ships.forEach((ship) => {
        ship.hits.forEach((coordinate) => {
            const cell = board.querySelector(`[data-x="${coordinate[0]}"][data-y="${coordinate[1]}"]`)
            cell.classList.add("hit")
            if(ship.isSunk()){
                cell.classList.remove("hidden")
            }
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

    const {x, y} = getCoordinatesFromCell(cell)
    try{
        const attack = gameInstance.attack([x,y])
        if(attack === 'hit'){
            cell.classList.add('hit')
            createAlert('You hit a ship!')
            cell.removeEventListener('click', makeAttack)
        }else if(attack === 'miss'){
            cell.removeEventListener('click', makeAttack)
            gameInstance.changePlayer()
            const computerAttack = gameInstance.computerAttack()
            if(computerAttack === 'miss'){
                createAlert('You both missed!')
            }
            else if(computerAttack === 'hit'){
                createAlert('You missed but the computer hit!')
            }
            gameInstance.changePlayer()
        }
        const gameOver = gameInstance.gameEnd()
        console.log(gameOver)
        updateGrid('player', gameInstance.player1.getBoard())
        updateGrid('computer', gameInstance.player2.getBoard())
        if(gameOver){
            console.log("In Here")
            endGame(gameOver)
        }
    }catch(e){

    }
}

const updateEventListeners = (type = 'player', gameInstance) => {
    const board = type === 'player' ? document.getElementById('player1') : document.getElementById('player2')
    const cells = board.querySelectorAll('.grid-cell')
    cells.forEach((cell) => {
        if(type === 'player'){
            cell.removeEventListener('mouseover', setShipImage)
            cell.removeEventListener('mouseout', removeShipImage)
        }else{
            if(!cell.classList.contains('hit') && !cell.classList.contains('miss')){
                cell.addEventListener('click', makeAttack)
                cell.gameInstance = gameInstance
            }
        }
    })
}

const stopPlacing = () => {
    const cells = document.getElementById('player1').querySelectorAll('.grid-cell')

    cells.forEach((cell) => {
        if(!cell.classList.contains('ship'))
        cell.style.backgroundImage = ''

        cell.replaceWith(cell.cloneNode(true))
    })
}

function setShipImage(event){
    const cell = event.target
    const { orientation, shipImages, shipLength } = cell

    const {x, y} = getCoordinatesFromCell(cell)
    for(let i = 0; i < shipLength; i++){
        const cellToChange = orientation === 'horizontal' 
            ? document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`)
            : document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`)
        if(cellToChange){
            if(!cellToChange.classList.contains('ship')){
                cellToChange.style.transform = orientation === 'horizontal' ? 'rotate(0deg)' : 'rotate(90deg)'
                cellToChange.style.backgroundImage = `url(${shipImages[i]})`
            }
        }
    }  
}

function removeShipImage(event){
    const cell = event.target
    const {orientation, shipLength} = cell
    const {x, y} = getCoordinatesFromCell(cell)
    for(let i = 0; i < shipLength; i++){
        const cellToChange = orientation === 'horizontal' 
            ? document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`)
            : document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`)
        if(cellToChange &&!cellToChange.classList.contains('ship')){
            cellToChange.style.backgroundImage = ``
        }
    }  
}

const placeShips = (gameInstance, shipIndex, orientation = 'horizontal') => {
    const cells = document.getElementById('player1').querySelectorAll('.grid-cell')
    const shipTypes = ['Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer']
    if(shipIndex < shipTypes.length) {

        const shipName = shipTypes[shipIndex]
        const shipImages = getShipImages(shipName)
        const shipLength = shipImages.length
        document.addEventListener('keydown', (e) => {
            if (e.key === 'r'){
                stopPlacing()
                placeShips(gameInstance, shipIndex, orientation === 'horizontal' ? 'vertical' : 'horizontal')
            }
        })
        cells.forEach((cell) => {
            cell.shipImages = shipImages
            cell.orientation = orientation
            cell.shipLength = shipLength
            cell.addEventListener('mouseover', setShipImage)
            cell.addEventListener('mouseout', removeShipImage)
            cell.addEventListener('click', () => {
                const {x,y} = getCoordinatesFromCell(cell)
                const ship = shipFactory(shipName, shipLength)
                ship.orientation = orientation
                try{
                    gameInstance.player1.getBoard().placeShip(ship, [x,y])
                    updateGrid('player', gameInstance.player1.getBoard())
                    stopPlacing()
                    placeShips(gameInstance, shipIndex+1, orientation)
                }catch(e){
                    createAlert(e.message)       
                }
            })
        })
    }else{
        stopPlacing()
        updateEventListeners('player', gameInstance)
        updateEventListeners('computer', gameInstance)
    }
}

export {
    createAlert,
    drawGrid,
    updateGrid,
    updateEventListeners,
    placeShips
}