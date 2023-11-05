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
        playerMoves = [];
        cpuMoves = [];
        Gameboard.playerMove();
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
        square.target.textContent = displayController.playerSign();

        if(hasWinningPattern(playerMoves)){
            // go winning function
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
                    square.textContent = displayController.computerSign();
                    cpuMoves.push(parseInt(square.className));
                    if(hasWinningPattern(cpuMoves)){
                        // go winning function
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
        clearGameboard,
        playerMove,
        cpuMove
    };
})();



const displayController = (function() {
    let pSign = document.querySelector(".active").textContent;
    let cSign = () => {
        if(pSign === 'x') {
            return 'o';
        }
        else {
            return 'x';
        }
    }

    let choiceButtons = document.getElementsByClassName("choice");
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        // document.getElementsByClassName("active").disabled = true;
        pSign = this.textContent;
        Gameboard.clearGameboard();
        });
    }

    const playerSign = () => {
        return pSign;
    }

    const computerSign = () => {
        return cSign();
    }

    return {
        playerSign,
        computerSign
    }
})();

Gameboard.playerMove();

