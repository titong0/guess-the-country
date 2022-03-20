import React, { useState } from "react";
import { useCountries } from "./useCountries";
import Flags from "./Flags";
import CountryNames from "./CountryNames";
import Stats from "./Stats";

const Countries = ({ APIcountries, newCountriesMsg }) => {
  const countries = useCountries(APIcountries);
  const [selected, setSelected] = useState(null);
  return (
    <div className="game-container">
      {countries.current.length ? (
        <>
          <div className="flags-container">
            <Flags
              countries={countries.current}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
          <CountryNames selected={selected} countries={countries} />
        </>
      ) : (
        <>
          <Stats stats={countries.stats} />
          <button className="btn-primary" onClick={countries.newCountries}>
            {newCountriesMsg}
          </button>
        </>
      )}
    </div>
  );
};

export default Countries;
