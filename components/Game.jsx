import React from "react";
import { useState } from "react";
import { shuffleArray } from "../helpers";
import Countries from "./Countries";
import DifficultySelector from "./DifficultySelector";

const Game = (props) => {
  const [difficulty, start] = useState(-1);
  return (
    <div>
      {difficulty === -1 ? (
        <div className="difficulty-container">
          <span style={{ marginLeft: "1rem", fontSize: "2rem" }}>
            {props.children}
          </span>
          <DifficultySelector start={start} />
        </div>
      ) : (
        <Countries
          difficulty={difficulty}
          APIcountries={shuffleArray(props.countries)}
          start={start}
        />
      )}
    </div>
  );
};

export default Game;
