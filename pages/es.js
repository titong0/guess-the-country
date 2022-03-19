import Head from "next/head";
import Link from "next/link";
import { getCountries, shuffleArray } from "../helpers";
import Countries from "../components/Country";

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Adivina las banderas</title>
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
        <Link href="/">English version</Link>
      </nav>
      <h1>Adivina las banderas con sus nombres</h1>
      <p>Hacé click en la bandera, después en su nombre.</p>
      <div>
        <Countries countries={props.countries} />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getCountries("spa");
  return {
    props: {
      countries: shuffleArray(data),
      newCountriesMsg: "Se terminaron los paises",
    },
  };
};

export default Index;
