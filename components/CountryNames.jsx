import { BsArrowRight } from "react-icons/bs";
const CountryNames = ({ countries, selected }) => {
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
        className="skip-country btn-primary"
        style={{padding: "0.2rem 1rem"}}
        onClick={countries.nextCountries}
      >
        <BsArrowRight size="50" />
      </button>
    </div>
  );
};

export default CountryNames;
