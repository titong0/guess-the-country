import React, { useState, useEffect } from "react";
import { shuffleArray } from "../helpers";

const Countries = ({ countries }) => {
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
    countries = countries.slice(15, countries.length);
    setRemainingCountries(countries.slice(0, 15));
    setShuffled(shuffleArray(countries.slice(0, 15)));
  };

  useEffect(() => {
    if (!remainingCountries.length) {
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
        {remainingCountries.map((i) => (
          <img
            className={i.name.common === selected ? "flags-hover" : ""}
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
      </div>
    </div>
  );
};

export default Countries;
