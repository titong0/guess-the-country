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
    <div className="flags-container">
      {countries.map((i) => (
        <button
          className={
            i.name === selected ? "flags-hover" : selected ? "hide" : ""
          }
          onKeyDown={(e) => (e.code === "Enter" ? setSelected(i.name) : null)}
          onClick={() => setSelected(i.name)}
          key={i.name}
          id="countryOption"
        >
          <img src={i.flagSrc} id="countryOption" alt="" />
          <span>{i.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Flags;
