const Gameboard = (function () {
    const domGameboard =
    [1,2,3,
     4,5,6,
     7,8,9];
    const winningPattern =
    [[1,2,3],
     [4,5,6],
     [7,8,9],
     [1,4,7],
     [2,5,8],
     [3,6,9],
     [1,5,9],
     [3,5,7]];
    let playerMoves = [];
    let cpuMoves = [];
    const allSquare = document.querySelectorAll("td");

// ---------- REMOVE TEXT INSIDE BOARD ----------
    const clearGameboard = () => {
        for (const square of allSquare) {
            square.textContent = "";
        }
    }

// ---------- RECORD PLAYER MOVES ----------
    const playerMove = () => {
        for (const square of allSquare) {
            if(square.textContent === "") {
                square.addEventListener("click", playerClick);
            }
            else {
                square.removeEventListener("click", playerClick);
            }
        }
    }

    function playerClick(square) {
        playerMoves.push(parseInt(square.target.className));
        square.target.textContent = "x";

        if(hasWinningPattern(playerMoves)){
            console.log("PLAYER WINS");
        }
        Gameboard.cpuMove();
    }

// ---------- RECORD CPU MOVES ----------
    const cpuMove = () => {
        let freeSquare = getFreeSquare();
        const cpu = freeSquare[Math.floor(Math.random() * freeSquare.length)];
        if(cpu !== undefined) {
            for(const square of allSquare) {
                if(parseInt(square.className) === cpu) {
                    square.textContent = "o";
                    cpuMoves.push(parseInt(square.className));
                    if(hasWinningPattern(cpuMoves)){
                        console.log("COMPUTER WINS");
                    }
                    Gameboard.playerMove();
                }
            }
        }
    }

    function getFreeSquare() {
        let freeSquare = [];
        for (const square of allSquare) {
            if(square.textContent === "") {
                freeSquare.push(parseInt(square.className));
            }
        }
        return freeSquare;
    }

// ---------- CHECK IF PLAYER OR CPU HAS WINNING PATTERN ----------
    function hasWinningPattern(moves) {
        for (const pattern of winningPattern) {
        // Check if all elements in the 'pattern' are present in 'moves'
        const isWinning = pattern.every(a => moves.includes(a));
            if (isWinning) {
                return true;
            }
        }
        return false;
    }

     return {
        cpuMove,
        clearGameboard,
        playerMove
    };
})();

const player = function(sign) {

    const changeSign = () => {

    }

};

const displayController = (function() {
    // all controls should be here
    // change player sign
    // reset
})();

Gameboard.playerMove();
// Gameboard.clearGameboard();