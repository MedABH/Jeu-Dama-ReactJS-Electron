import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

const initialBoardState = [
  // Initialize a 2D array representing the board state
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-']
];

const Board = () => {
  const [board, setBoard] = useState(initialBoardState);

  const handleSquareClick = (rowIndex, colIndex) => {
    const newBoard = board.map((row, rIdx) => 
      row.map((square, cIdx) => {
        if (rIdx === rowIndex && cIdx === colIndex) {
          return square === '-' ? 'X' : square; // Simple toggle for demonstration
        }
        return square;
      })
    );
    setBoard(newBoard);
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((square, colIndex) => (
            <Square 
              key={colIndex} 
              value={square} 
              onClick={() => handleSquareClick(rowIndex, colIndex)} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
