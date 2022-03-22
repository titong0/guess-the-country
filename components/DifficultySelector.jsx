import React, { useState } from "react";
import styles from "./DifficultySelector.module.css";
import { BiCheck } from "react-icons/bi";

const colors = ["#70c641", "#c3d425", "#f2db01", "#ef9018", "#f44030"];
const amounts = [15, 30, 60, 120, 250];

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
          {Array(5)
            .fill("")
            .map((i, idx) => {
              if (idx <= counter)
                return (
                  <div
                    key={colors[idx]}
                    style={{ backgroundColor: colors[counter] }}
                  ></div>
                );
              if (idx > counter) return <div key={colors[idx]}></div>;
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
