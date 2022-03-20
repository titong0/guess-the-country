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
        onClick={countries.nextCountries}
      >
        {"->"}
      </button>
    </div>
  );
};

export default CountryNames;
