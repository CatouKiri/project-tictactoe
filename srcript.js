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
    const allSquare = document.querySelectorAll("td");

    const setGameboard = () => {
        for (const square of allSquare) {
            square.addEventListener("click", event => {
                console.log("HELLO");
            })
        }
    }

    const clearGameboard = () => {
        for (const square of allSquare) {
            square.textContent = "";
        }
    }

    const playerMove = () => {

    }

     return {
        domGameboard,
        winningPattern,
        setGameboard,
        clearGameboard,
        playerMove
    };
})();

// const Player = (function() {
//     let playerMoves = [];

//     const move = () => playerMoves.push(class);
//     const checkMove = () => {
//     }
//  })

// const displayController = (function() {
//     const domGameboard = document.querySelectorAll("td");
// })

// console.log(Gameboard.domGameboard);
// Gameboard.setGameboard();