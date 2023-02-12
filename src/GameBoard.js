import React, { useState } from 'react';
import Square from './Square';

function GameBoard() {
  const [player, setPlayer] = useState('black');
  const [board, setBoard] = useState(Array(19).fill(Array(19).fill(null)));

  const handleClick = (row, col) => {
    // Make a copy of the board array
    const newBoard = board.map(row => row.slice());
    // Place the current player's piece on the board
    newBoard[row][col] = player;
    // Switch to the other player
    setPlayer(player === 'black' ? 'white' : 'black');
    // Update the board state
    setBoard(newBoard);
  };

  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((square, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              value={square}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
