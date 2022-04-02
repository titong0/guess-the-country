// algorithm from https://stackoverflow.com/a/12646864
export const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const filterIslands = (countries) => {
  return countries.filter(
    (i) => i.name.common.toLowerCase().indexOf("islands") === -1
  );
};

export const getCountries = async (lang) => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  const countries = filterIslands(data);

  // english names are in country.name.common for some reason
  if (!lang) {
    return countries.map((country) => {
      return {
        name: country.name.common,
        flagSrc: country.flags.svg,
      };
    });
  }
  return countries.map((country) => {
    return {
      name: country.translations[lang].common,
      flagSrc: country.flags.svg,
    };
  });
};
