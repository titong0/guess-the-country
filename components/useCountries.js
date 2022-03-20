import { useState } from "react";
import { shuffleArray } from "../helpers";

const remove = (arr, item) => {
  return [...arr].filter((i) => i.name !== country);
};

export const useCountries = (countries) => {
  const [allCountries, setAllCountries] = useState(countries);
  const [current, setCurrent] = useState([...countries].slice(0, 15));
  const [shuffledNames, setShuffledNames] = useState(shuffleArray(current));
  const [stats, setStats] = useState({
    misses: 0,
    correct: 0,
    startTime: new Date(),
  });
  console.log(stats);
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
    setCurrent([...current].filter((i) => i.name !== country));
    setShuffledNames([...shuffledNames].filter((i) => i.name !== country));
    setAllCountries([...allCountries].filter((i) => i.name !== country));
  };

  const nextCountries = () => {
    const all = [...allCountries].slice(15);
    const modified = [...all].slice(0, 15);
    const shuffled = shuffleArray([...modified]);
    setAllCountries(all);
    setCurrent(modified);
    setShuffledNames(shuffled);
  };

  const newCountries = () => {
    shuffleArray(countries);
    setAllCountries(countries);
    setCurrent([...countries].slice(0, 15));
    setShuffledNames(shuffleArray([...countries].slice(0, 15)));
  };

  const skipAll = () => {
    setAllCountries([]);
    setCurrent([]);
    setShuffledNames([]);
  };
  return {
    allCountries,
    current,
    shuffledNames,
    nextCountries,
    removeCountry,
    newCountries,
    stats,
    skipAll,
  };
};
