import React, { useState } from "react";
import "./App.css";

const App = () => {
  const Cell = () => {
    return <td></td>;
  };

  return (
    <div className="container">
      <h1 className="title">
        <div>NOUGHTS</div>
        <div>AND</div>
        <div>CROSSES</div>
      </h1>

      <h2 className="subtitle">by Alex Constantin</h2>

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
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
          <tr>
            <Cell />
            <Cell />
            <Cell />
          </tr>
        </table>
      </div>
      <div>
        <p className="win-msg">The winner is </p>
        <button className="win-restart">Start a new game!</button>
      </div>
      <button className="reset">Reset the game!</button>
    </div>
  );
};

export default App;
