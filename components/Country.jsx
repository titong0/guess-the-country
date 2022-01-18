import React, { useState, useEffect } from "react";
import { shuffleArray } from "../helpers";

const Countries = ({ countries }) => {
  const [allCountries, setAllCountries] = useState(countries);
  const [remainingCountries, setRemainingCountries] = useState(
    countries.slice(0, 15)
  );
  const [shuffled, setShuffled] = useState(remainingCountries);
  const [selected, setSelected] = useState(null);

  const removeCountry = (name) => {
    setSelected(null);
    if (name !== selected) return;

    setRemainingCountries(
      remainingCountries.filter((i) => i.name.common !== name)
    );
    setShuffled(shuffled.filter((i) => i.name.common !== name));
    document.querySelector("html").classList += "flash";
    setTimeout(() => {
      document.querySelector("html").classList = "";
    }, 1000);
  };

  const fillCountries = () => {
    setAllCountries(allCountries.slice(15, allCountries.length));
    setRemainingCountries(allCountries.slice(0, 15));
    setShuffled(shuffleArray(allCountries.slice(0, 15)));
  };

  useEffect(() => {
    if (!remainingCountries.length) {
      if (!allCountries.length) return;
      fillCountries();
    }
  }, [remainingCountries]);

  useEffect(() => {
    setShuffled(shuffleArray(remainingCountries));
    const handleClickOutside = (click) => {
      if (click.composedPath()[0].id !== "countryOption") {
        setSelected(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="game-container">
      <div className="flags-container">
        {!remainingCountries.length ? (
          <>
            <h3>No more countries, Do you want to start again?</h3>
            <button className="country-option">Start again</button>
          </>
        ) : null}
        {remainingCountries.map((i) => (
          <img
            className={
              i.name.common === selected
                ? "flags-hover"
                : selected
                ? "hide"
                : ""
            }
            onClick={() => setSelected(i.name.common)}
            src={i.flags.png}
            key={i.name.common}
            id="countryOption"
          />
        ))}
      </div>
      <div className="options-container">
        {shuffled.map((country) => (
          <button
            key={country.name.common}
            className="country-option"
            onClick={() => {
              removeCountry(country.name.common);
            }}
            disabled={selected === null}
          >
            {country.name.common}
          </button>
        ))}
        <button className="new-countries-btn" onClick={fillCountries}>
          New countries
        </button>
      </div>
    </div>
  );
};

export default Countries;
