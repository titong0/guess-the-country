import { shuffleArray } from "../helpers";
import Countries from "../components/Country";

const Index = (props) => {
  return (
    <>
      <nav>
        <a href="https://restcountries.com/">API</a>
        <a href="https://github.com/titong0/guess-the-country">
          <img
            src="https://www.svgrepo.com/show/332084/github.svg"
            alt="Github logo"
            width="45"
          />
        </a>
      </nav>
      <h1>Guess the country flags </h1>
      <p>
        Click on the country flag first. Afterwards, select the option you think
        is correct from the buttons below
      </p>
      <div>
        <Countries countries={props.countries} />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: {
      countries: shuffleArray(data.filter((i) => i.name.common.length < 20)),
    },
  };
};

export default Index;
