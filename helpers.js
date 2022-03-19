// algorithm from https://stackoverflow.com/a/12646864
export const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const getCountries = async (lang) => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  // english names are in country.name.common for some reason
  if (!lang) {
    return data.map((country) => {
      return {
        name: country.name.common,
        flagSrc: country.flags.png,
      };
    });
  }
  return data.map((country) => {
    return {
      name: country.translations[lang].common,
      flagSrc: country.flags.png,
    };
  });
};
