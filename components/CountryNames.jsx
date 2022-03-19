const CountryNames = ({
  shuffledNames,
  selected,
  removeCountry,
  nextCountries,
}) => {
  const remover = (name) => {
    if (name === selected) {
      removeCountry(name);
    }
  };

  return (
    <div className="options-container">
      {shuffledNames.map((country) => (
        <button
          key={country.name}
          className="country-option"
          onClick={() => {
            remover(country.name);
          }}
          disabled={!selected}
        >
          {country.name}
        </button>
      ))}
      <button className="skip-countries country-option " onClick={nextCountries}>
        {"->"}
      </button>
    </div>
  );
};

export default CountryNames;
