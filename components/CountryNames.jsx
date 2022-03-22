import { BsArrowRight, BsSkipForward } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

const CountryNames = ({ countries, selected, start, difficulty, step }) => {
  return (
    <div className="options-container">
      {countries.shuffledNames.map((country) => (
        <button
          key={country.name}
          className="country-option"
          onClick={() => {
            countries.removeCountry(selected, country.name);
          }}
          disabled={!selected}
        >
          {country.name}
        </button>
      ))}
      <button
        className="btn-primary"
        style={{ padding: "0.2rem 1rem" }}
        onClick={countries.nextCountries}
      >
        <BsSkipForward size="50" />
      </button>
      <button
        className="btn-primary reset"
        style={{ padding: "0.2rem 1rem" }}
        onClick={() => start(-1)}
      >
        <GrPowerReset size="50" color="#ffffff" />
      </button>
      <span className="step-display highlight">
        {step} / {Math.floor(difficulty / 15)}
      </span>
    </div>
  );
};

export default CountryNames;
