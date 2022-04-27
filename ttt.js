let tttOrigBoard;
const tttHuPlayer = 'O';
const tttAiPlayer = 'X';
const tttWinCombos = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll('.tttcell');
startGame();

function startGame() {
    document.querySelector('.ttt-endgame').style.display = 'none'
    tttOrigBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(tttSquare) {
  if (typeof tttOrigBoard[tttSquare.target.id] == 'number') {
    turn(tttSquare.target.id, tttHuPlayer)
    if (!checkTie()) turn(bestSpot(), tttAiPlayer);  
  }
}

function turn(tttSquareId, tttPlayer) {
  tttOrigBoard[tttSquareId] = tttPlayer;
  document.getElementById(tttSquareId).innerText = tttPlayer;
  let tttGameWon = tttCheckWin(tttOrigBoard, tttPlayer)
  if (tttGameWon) tttGameOver(tttGameWon)
}

function tttCheckWin(tttBoard, tttPlayer) {
    let tttPlays = tttBoard.reduce((a, e, i) =>
      (e === tttPlayer) ? a.concat(i) : a, []);
    let tttGameWon = null;
    for (let [tttIndex, tttWin] of tttWinCombos.entries()) {
        if (tttWin.every(elem => tttPlays.indexOf(elem) > -1)) {
            tttGameWon = {tttIndex: tttIndex, tttPlayer: tttPlayer};
            break;
        }
    }
    return tttGameWon;
}

function tttGameOver(tttGameWon) {
    for (let tttIndex of tttWinCombos[tttGameWon.tttIndex]) {
        document.getElementById(tttIndex).style.backgroundColor = 
          tttGameWon.tttPlayer == tttHuPlayer ? 'blue' : 'red';
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
}

function declareWinner(who) {
    document.querySelector('.ttt-endgame').style.display = 'block';
    document.querySelector('.ttt-endgame .ttt-text').innerText = who;
}

function emptySquares() {
    return tttOrigBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
    return emptySquares()[0];
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = 'green';
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game!")
        return true;
    }
    return false;
}

