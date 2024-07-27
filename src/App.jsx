import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [turn, setTurn] = useState(0);
  let [boardState, updateBoardState] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  });
  let [winner, setWinner] = useState("");

  const winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];


  const Cell = ({id}) => {
    const players = ["O", "X"];

    const checkWinner = () => {
      let t = false;
      if (turn < 9) {
        for (const combo of winningCombinations) {
          const [a, b, c] = combo;
          if (boardState[a] !== "" && boardState[a] === boardState[b] && boardState[a] === boardState[c]) t = true;
        }
        return t;
      } else {
        return "draw";
      }
    }

    const handleClick = () => {
      if (turn > 0 && boardState[id] === "") {
        const newBoardState = { ...boardState, [id]: players[turn % 2] };
        updateBoardState(newBoardState);
        setTurn(turn+1);
        const hasWon = checkWinner();
        console.log(hasWon)
        if (hasWon === true) {
          setWinner(boardState[id]);
          setTurn(0);
        } else if (hasWon === "draw") {
          setWinner("nobody! It's a draw!");
        }
      } else {
        alert("You did not start a new game!");
      }
    }

    return <td onClick={handleClick}> { boardState[id] } </td>;
  };

  const startGame = () => {
    setTurn(1);
    updateBoardState({
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: ""
    });
    setWinner("");
  }

  const Board = () => {
    
  }

  return (
    <div className="container">
      <h1 className="title">
        <div>NOUGHTS</div>
        <div>AND</div>
        <div>CROSSES</div>
      </h1>

      <h2 className="subtitle">forked from Alex Constantin</h2>

      <div className="scores">
        <div>
          <b className="xScoreTitle scoreTitle">X</b> -
          <div className="xScore score"></div>
        </div>
        :
        <div>
          <div className="oScore score"></div> -
          <b className="oScoreTitle scoreTitle">O</b>
        </div>
      </div>

      <div>
        <table>
          <tr>
            <Cell id={1} />
            <Cell id={2} />
            <Cell id={3} />
          </tr>
          <tr>
            <Cell id={4} />
            <Cell id={5} />
            <Cell id={6} />
          </tr>
          <tr>
            <Cell id={7} />
            <Cell id={8} />
            <Cell id={9} />
          </tr>
        </table>
      </div>
      <div>
        <p className="win-msg">The winner is {winner} </p>
        <button className="win-restart" onClick={startGame}>Start a new game!</button>
      </div>
      <button className="reset" onClick={startGame}>Reset the game!</button>
    </div>
  );
};

export default App;
