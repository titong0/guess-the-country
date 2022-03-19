import Head from "next/head";
import Link from "next/link";
import { getCountries, shuffleArray } from "../helpers";
import Countries from "../components/Country";

const Index = (props) => {
  return (
    <>
      <Head>
        <title>Adivina las banderas</title>

        <meta name="description" content="Uní las banderas con sus nombres" />

        {/* <!-- Facebook Meta Tags --/> */}
        <meta
          property="og:url"
          content="https://guess-the-country-flag.netlify.app/es/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Adivina las banderas" />
        <meta
          property="og:description"
          content="Uní las banderas con sus nombres"
        />
        <meta
          property="og:image"
          content="https://guess-the-country-flag.netlify.app/thumbnail.png"
        />

        {/* <!-- Twitter Meta Tags --/> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="guess-the-country-flag.netlify.app"
        />
        <meta
          property="twitter:url"
          content="https://guess-the-country-flag.netlify.app/es/"
        />
        <meta name="twitter:title" content="Adivina las banderas" />
        <meta
          name="twitter:description"
          content="Uní las banderas con sus nombres"
        />
        <meta
          name="twitter:image"
          content="https://guess-the-country-flag.netlify.app/thumbnail.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
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
