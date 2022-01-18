import { shuffleArray } from "../helpers";
import Countries from "../components/Country";

const Index = (props) => {
  return (
    <div>
      <h1>Guess the country flags </h1>
      <p>
        Click on the country flag first. Afterwards, select the option you think
        is correct from the buttons below
      </p>
      <div>
        <Countries countries={props.countries} />
      </div>
      <footer>
        {/* <a href="https://github"></a> */}
      </footer>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return { props: { countries: shuffleArray(data) } };
};

export default Index;
