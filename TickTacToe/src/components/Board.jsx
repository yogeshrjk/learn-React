import React, {useState} from 'react';
import Square from "./Square.jsx";

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    //checkWinner
    const checkWinner = () => {
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerLogic) {
            const [a,b,c] = logic;
            if(board[a] !== null && board[a] === board[b] && board[a] === board[c]){
                return board[a];
            }
        }
        return false;
    }
    const isWinner = checkWinner();


    const handleClick = (index) => {
        if(board[index] !== null){
            return;
        }
    const copyBoard = [...board];
    copyBoard[index] = isXTurn ? "X" : "O";
    setBoard(copyBoard);
    setIsXTurn(!isXTurn);
    }

    const handleReset = () => {
        setBoard(Array(9).fill(null));
    }

    return (
        <div className="board-container">
            { isWinner ? (<> <h1> {isWinner} won the game </h1>
                <button onClick={handleReset}>play again</button>
                </>
                ) :
              ( <>
                  <h4>Player {isXTurn?'X':'O'} turn</h4>
                   <div className="board-row">
                       <Square onClick={() => handleClick(0)} value={board[0]}/>
                       <Square onClick={() => handleClick(1)} value={board[1]}/>
                       <Square onClick={() => handleClick(2)} value={board[2]}/>
                   </div>

                   <div className="board-row">
                       <Square onClick = {() => handleClick(3)} value={board[3]}/>
                       <Square onClick={() => handleClick(4)} value={board[4]}/>
                       <Square onClick={() => handleClick(5)} value={board[5]}/>
                   </div>

                   <div className="board-row">
                       <Square onClick={() => handleClick(6)} value={board[6]}/>
                       <Square onClick={() => handleClick(7)} value={board[7]}/>
                       <Square onClick={() => handleClick(8)} value={board[8]}/>
                   </div>
               </>)
}

        </div>
    );
};

export default Board;