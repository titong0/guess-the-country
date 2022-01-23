import React, { useState, useEffect } from "react";
import { shuffleArray } from "../helpers";

const Countries = ({ countries }) => {
  const [allCountries, setAllCountries] = useState(countries);
  const [currentCountries, setCurrentCountries] = useState(
    countries.slice(0, 15)
  );
  const [shuffled, setShuffled] = useState(currentCountries);
  const [selected, setSelected] = useState(null);

  const removeCountry = (name) => {
    setSelected(null);
    if (name !== selected) return;

    setCurrentCountries(currentCountries.filter((i) => i.name.common !== name));
    setShuffled(shuffled.filter((i) => i.name.common !== name));
    document.querySelector("html").classList += "flash";
    setTimeout(() => {
      document.querySelector("html").classList = "";
    }, 1000);
  };

  const fillCountries = () => {
    setAllCountries(allCountries.slice(15, allCountries.length));
    setCurrentCountries(allCountries.slice(0, 15));
    setShuffled(shuffleArray(allCountries.slice(0, 15)));
  };

  const newCountries = () => {
    const newOrder = shuffleArray(countries);
    setAllCountries(newOrder);
    setCurrentCountries(newOrder.slice(0, 15));
    setShuffled(shuffleArray(newOrder.slice(0, 15)));
  };

  useEffect(() => {
    if (!currentCountries.length) {
      if (!allCountries.length) return;
      fillCountries();
    }
  }, [currentCountries]);

  useEffect(() => {
    setShuffled(shuffleArray(currentCountries));

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
        {!currentCountries.length ? (
          <>
            <h3>No more countries, Do you want to start again?</h3>
            <button className="country-option" onClick={newCountries}>
              Start again
            </button>
          </>
        ) : null}
        {currentCountries.map((i) => (
          <button onClick={() => setSelected(i.name.common)}>
            <img
              className={
                i.name.common === selected
                  ? "flags-hover"
                  : selected
                  ? "hide"
                  : ""
              }
              src={i.flags.png}
              key={i.name.common}
              tabIndex="0"
              id="countryOption"
              alt=""
            />
          </button>
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
