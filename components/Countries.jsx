import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { useCountries } from "./useCountries";
import Flags from "./Flags";
import Stats from "./Stats";
import CountryNames from "./CountryNames";

const Countries = ({ APIcountries, difficulty, start }) => {
  const countries = useCountries(APIcountries, difficulty, start);
  const [selected, setSelected] = useState(null);
  return (
    <div className="game-container">
      {countries.current.length ? (
        <>
          <Flags
            countries={countries.current}
            selected={selected}
            setSelected={setSelected}
          />
          <CountryNames selected={selected} countries={countries} />
        </>
      ) : (
        <>
          <Stats stats={countries.stats} />
          <button className="btn-primary" onClick={countries.newCountries}>
            <GrPowerReset size="50" />
          </button>
        </>
      )}
    </div>
  );
};

export default Countries;
