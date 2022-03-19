import React, { useState, useEffect } from "react";
import Flags from "./Flags";
import CountryNames from "./CountryNames";
import { shuffleArray } from "../helpers";

const Countries = (props) => {
  const [currentCountries, setCurrentCountries] = useState(
    [...props.countries].slice(0, 15)
  );
  const [shuffledNames, setShuffledNames] = useState(
    shuffleArray(currentCountries)
  );
  const [allCountries, setAllCountries] = useState(props.countries);
  const [selected, setSelected] = useState(null);

  const removeCountry = (country) => {
    const current = [...currentCountries].filter((i) => i.name !== country);
    if (!current.length) {
      return nextCountries();
    }
    const shuffled = [...shuffledNames].filter((i) => i.name !== country);
    const all = [...allCountries].filter((i) => i.name !== country);
    setCurrentCountries(current);
    setShuffledNames(shuffled);
    setAllCountries(all);
  };

  const nextCountries = () => {
    const all = [...allCountries].slice(15);
    if (!all.length) {
      return newCountries();
    }
    const current = [...all].slice(0, 15);
    const shuffled = shuffleArray([...current]);
    setAllCountries(all);
    setCurrentCountries(current);
    setShuffledNames(shuffled);
  };

  const newCountries = () => {
    // alert(newCountriesMsg);
    shuffleArray(props.countries);
    setAllCountries(props.countries);
    setCurrentCountries([...props.countries].slice(0, 15));
    setShuffledNames(shuffleArray([...props.countries].slice(0, 15)));
  };
  return (
    <div className="game-container">
      <div className="flags-container">
        <Flags
          countries={currentCountries}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <CountryNames
        shuffledNames={shuffledNames}
        selected={selected}
        removeCountry={removeCountry}
        nextCountries={nextCountries}
      />
    </div>
  );
};

export default Countries;
