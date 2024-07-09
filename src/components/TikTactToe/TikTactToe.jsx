import React, { useEffect, useState } from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-red-500 float-left text-4xl h-24 p-0 text-center w-24 -mr-px -mt-px cursor-pointer bg-black-100"
    >
      {value}
    </button>
  );
};

const TikTactToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(true);
  const [status, setstatus] = useState("");

  const handleClick = (currentSquare) => {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[currentSquare]) return;
    copySquares[currentSquare] = isX ? "X" : "O";
    setIsX(!isX);
    setSquares(copySquares);
  };

  const getWinner = () => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setSquares("This is a draw! Please restart the game!");
    } else if (getWinner(squares)) {
      setstatus(`Winner is ${getWinner(squares)}! Please restart the game!`);
    } else {
      setstatus(`Next player is ${isX ? "X" : "O"}`);
    }
  }, [squares, isX]);

  const handleRestart = ( )=>{
    setIsX(true)
    setSquares(Array(9).fill(''))
  }

  return (
    <div className="flex flex-col items-center mt-24">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1 className="mt-2">{status}</h1>
      <button onClick={handleRestart} className="flex w-40 justify-center rounded-md mt-5 bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Restart</button>
    </div>
  );
};

export default TikTactToe;
