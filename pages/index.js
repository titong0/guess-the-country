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
        {/* <!-- Facebook Meta Tags --/> */}
        <meta
          property="og:url"
          content="https://guess-the-country-flag.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Guess the country flags" />
        <meta
          property="og:description"
          content="Match the country flags with their names"
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
        <meta name="twitter:title" content="Guess the country" />
        <meta
          name="twitter:description"
          content="Match the country flags with their names"
        />
        <meta
          name="twitter:image"
          content="https://guess-the-country-flag.netlify.app/thumbnail.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
        <meta
          property="og:image:secure_url"
          content="https://guess-the-country-flag.netlify.app/thumbnail.png"
        />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Multiple flags" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="800" />
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
