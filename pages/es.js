import Head from "next/head";
import Link from "next/link";
import { getCountries } from "../helpers";
import Game from "../components/Game";
import { shuffleArray } from "../helpers";

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
            height="45"
          />
        </a>
        <Link href="/">
          <img src="/english.png" alt="British flag" width="76" height="38" />
        </Link>
      </nav>
      <h1>Adivina las banderas con sus nombres</h1>
      <p>Hacé click en la bandera, después en su nombre.</p>
      <Game countries={props.countries}>Cantidad de países:</Game>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getCountries("spa");
  return {
    props: {
      countries: shuffleArray(data),
    },
  };
};

export default Index;
