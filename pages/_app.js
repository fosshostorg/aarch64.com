import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ARM-64.com</title>
        <meta
          name="description"
          content="Blog ran by experts about the challenges of planning, coordinating and managing 50u of ARM hardware in multiple, global locations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
