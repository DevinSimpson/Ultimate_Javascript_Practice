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
  turn(tttSquare.target.id, tttHuPlayer)
}

function turn(tttSquareId, tttPlayer) {
  tttOrigBoard[tttSquareId] = tttPlayer;
  document.getElementById(tttSquareId).innerText = tttPlayer;
  let tttGameWon = tttCheckWin(tttOrigBoard, tttPlayer)
  if (tttGameWon) tttGameOver(tttGameWon)
}

function tttCheckWin(tttBoard, tttPlayer) {
    let tttPlays = tttBoard.reduce(a, e, i) =>
      (e === tttPlayer)) ? a.concat(i) : a, []);
    let tttGameWon = null;
    for (let [tttIndex, tttWin] of tttWinCombos.entries()) {
        if (tttWin.every(elem => tttPlays.indexOf(elem > -1)) {
            gameWon = {tttIndex: tttIndex, tttPlayer: tttPlayer};
            break;
        })
    }
    return gameWon;
}