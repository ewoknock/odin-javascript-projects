/*  Globals */
const resetButton = document.querySelector('.reset');
const gridCellDom = document.querySelectorAll('.grid__cell');
const gridCells = Array.from(gridCellDom);
const grid = document.querySelector(".grid");

let gameOver = false;

/*  Board   */

const board = (function(){
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    const createNewBoard = function(){
        gameOver = false;
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for(let i = 0; i < board.length; i++){
            gridCells[i].textContent = "";
        }
    }

    const getBoard = function(){
        return board;
    }

    const updateBoard = function(cell, current_player){
        board[cell] = current_player.symbol;
    }

    const isValidMove = function(cell){
        return board[cell] == 0;
    }

    const isBoardFull = function(){
        return board.every(item => item != 0);
    }

    const isGameOver = function(){
        let gameOver = false;
        gameOver = winStates.some(winState => {
            if(removeDuplicates([board[winState[0]], board[winState[1]], board[winState[2]]]).length == 1 && board[winState[0] != 0])
                return true;
        });
        return gameOver;
    }

    function removeDuplicates(arr){
        let uniq = arr.reduce(function (acc, curr){
            if(!acc.includes(curr))
                acc.push(curr);
            return acc;
        }, []);
        console.log(uniq);
        return uniq;
    }

    return{
        createNewBoard,
        getBoard,
        updateBoard,
        isValidMove,
        isBoardFull,
        isGameOver
    }
})();


/*  Player  */
const Player = function(name, symbol){
    return {name, symbol}
}

const player1 = Player('player1', 'x');
const player2 = Player('player2', 'o');

/*  Event Handlers  */
gridCellDom.forEach(gridCell => {
    console.log("hi");
    gridCell.addEventListener('click', (event) => {
        console.log(event);
        console.log(board.isGameOver());
        while(!board.isGameOver()){
            event.target.innerText = "x"
            break;
        }
    });
})

resetButton.addEventListener('click', () => {
    board.createNewBoard();
});

