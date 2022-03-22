import { useState } from "react";
import { shuffleArray } from "../helpers";

export const useCountries = (countries, difficulty, start) => {
  countries = countries.slice(0, difficulty);
  const [allCountries, setAllCountries] = useState(countries);
  const [current, setCurrent] = useState([...countries].slice(0, 15));
  const [shuffledNames, setShuffledNames] = useState(shuffleArray(current));

  const [stats, setStats] = useState({
    misses: 0,
    correct: 0,
    step: 1,
    startTime: new Date(),
  });

  const removeCountry = (selected, country) => {
    if (country !== selected) {
      const copy = { ...stats };
      copy.misses++;
      setStats(copy);
      return;
    }
    const copy = { ...stats };
    copy.correct++;
    setStats(copy);

    if (current.length === 1) {
      console.log(current);
      setAllCountries(allCountries.splice(1));
      return nextCountries();
    }
    setCurrent([...current].filter((i) => i.name !== country));
    setShuffledNames([...shuffledNames].filter((i) => i.name !== country));
    setAllCountries([...allCountries].filter((i) => i.name !== country));
  };

  const nextCountries = () => {
    const copy = { ...stats };
    copy.step++;
    setStats(copy);
    const all = [...allCountries].slice(15);
    const modified = [...all].slice(0, 15);
    const shuffled = shuffleArray(modified);
    setAllCountries(all);
    setCurrent(modified);
    setShuffledNames(shuffled);
  };

  const newCountries = () => {
    start(-1);
  };

  return {
    allCountries,
    current,
    shuffledNames,
    nextCountries,
    removeCountry,
    newCountries,
    stats,
  };
};
