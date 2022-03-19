import { useEffect } from "react";

const Flags = ({ countries, selected, setSelected }) => {
  useEffect(() => {
    const handleClickOutside = (click) => {
      if (click.composedPath()[0].id !== "countryOption") {
        setSelected(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {countries.map((i) => (
        <button
          onKeyDown={(e) => (e.code === "Enter" ? setSelected(i.name) : null)}
          onClick={() => setSelected(i.name)}
          key={i.name}
          id="countryOption"
        >
          <img
            className={
              i.name === selected ? "flags-hover" : selected ? "hide" : ""
            }
            key={i.name.common}
            width="150"
            src={i.flagSrc}
            id="countryOption"
            alt=""
          />
        </button>
      ))}
    </>
  );
};

export default Flags;
