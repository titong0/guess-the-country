import React, { useState } from "react";
import styles from "./DifficultySelector.module.css";
import { BiCheck } from "react-icons/bi";

const colors = ["#70c641", "#c3d425", "#f2db01", "#ef9018", "#f44030"];
const amounts = [15, 30, 60, 120, 220];

const DifficultySelector = ({ start }) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <span style={{ color: colors[counter], fontSize: "2rem" }}>
        {amounts[counter]}
      </span>
      <div className={styles.container}>
        <button
          className={`${styles.control} ${styles.btnSuccess}`}
          onClick={() => setCounter(counter - 1)}
          disabled={!counter}
        >
          -
        </button>
        <div className={styles.bar}>
          {colors.map((i, idx) => {
            return (
              <div
                key={colors[idx]}
                style={
                  idx <= counter ? { backgroundColor: colors[counter] } : {}
                }
              ></div>
            );
          })}
        </div>
        <button
          className={`${styles.control} ${styles.btnDanger}`}
          onClick={() => setCounter(counter + 1)}
          disabled={counter >= 4}
        >
          +
        </button>
        <button
          className={`btn-primary ${styles.startBtn}`}
          onClick={() => start(amounts[counter])}
        >
          <BiCheck size="50" />
        </button>
      </div>
    </>
  );
};

export default DifficultySelector;
