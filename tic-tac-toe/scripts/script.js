/*  Globals */
const resetButton = document.querySelector('.reset');
const gridCellDom = document.querySelectorAll('.grid__cell');
const gridCells = Array.from(gridCellDom);
const grid = document.querySelector(".grid");
const header = document.querySelector(".header");

let gameOver = false;

/*  Board   */
const board = (function(){
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    const createNewBoard = function(){
        gameOver = false;
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        game.initPlayer1();
        for(let i = 0; i < board.length; i++){
            gridCells[i].textContent = "";
        }
    }

    const getBoard = function(){
        return board;
    }

    const updateBoard = function(cell, current_player){
        board[cell] = current_player.symbol;

        for(let i = 0; i < gridCells.length; i++){
            if(board[i] != 0){
                gridCells[i].innerText = board[i];
            }
        }
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
            if(removeDuplicates([board[winState[0]], board[winState[1]], board[winState[2]]]).length == 1 && board[winState[0]] != 0)
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
const Player = (function(name, symbol){
    return {name, symbol}
})

const player1 = Player('Player 1', 'x');
const player2 = Player('Player 2', 'o');

/*  Game    */
const game = (function(){
    let current_player = player1;

    const initPlayer1 = function(){
        current_player = player1;
    }

    const switchPlayer = function(){
        current_player = current_player == player1 ? player2 : player1;
    }

    const getCurrentPlayer = function(){
        return current_player
    }

    return{
        switchPlayer, getCurrentPlayer, initPlayer1
    }
})();

/*  Event Handlers  */
gridCellDom.forEach(gridCell => {
    gridCell.addEventListener('click', (event) => {
        while(!board.isGameOver()){
            const index = event.target.dataset.index;
            if(!board.isValidMove(index)) return
            
            board.updateBoard(index, game.getCurrentPlayer());
            if(board.isGameOver()){
                winner = game.getCurrentPlayer().name;
                const div = document.createElement('div')
                div.classList.add('game-over');
                div.append(`${winner} wins!`);
                header.append(div);
                return;
            }else if(board.isBoardFull()){
                const div = document.createElement('div')
                div.classList.add('game-over');
                div.append(`It\'s a tie!`);
                header.append(div);
            }
            game.switchPlayer();
        }
    });
})

resetButton.addEventListener('click', () => {
    board.createNewBoard();
    let gameOverMsg = document.querySelector('.game-over');
    if(document.contains(gameOverMsg)){
        gameOverMsg.remove();
    }
});

board.createNewBoard();