import Head from "next/head";
import Link from "next/link";
import Countries from "../components/Country";
import { shuffleArray, getCountries } from "../helpers";

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Guess the country flags</title>
        <meta
          name="description"
          content="Match the country flags with their names"
        />
      </Head>
      <nav>
        <a href="https://restcountries.com/">API</a>
        <a href="https://github.com/titong0/guess-the-country">
          <img
            src="https://www.svgrepo.com/show/332084/github.svg"
            alt="Github logo"
            width="45"
          />
        </a>
        <Link href="/es">Version en español</Link>
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
  const data = await getCountries();

  return {
    props: {
      countries: shuffleArray(data),
      newCountriesMsg: "You ran out of countries. Starting again",
    },
  };
};

export default Index;
