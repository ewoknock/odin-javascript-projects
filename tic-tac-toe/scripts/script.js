/*  Globals */
const resetButton = document.querySelector('.reset');
const gridCells = Array.from(document.querySelectorAll('.grid__cell'));
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

    return{
        createNewBoard,
        getBoard,
        updateBoard,
        isValidMove,
        isBoardFull
    }
})();


/*  Player  */
const Player = function(name, symbol){
    return {name, symbol}
}

const player1 = Player('player1', 'x');
const player2 = Player('player2', 'o');