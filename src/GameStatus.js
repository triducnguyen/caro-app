import React from 'react';

function GameStatus({ player, winner }) {
  let message;
  if (winner) {
    message = `${winner} wins!`;
  } else {
    message = `${player}'s turn`;
  }

  return (
    <div className="game-status">
      <p>{message}</p>
    </div>
  );
}

export default GameStatus;
