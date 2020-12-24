import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Arm-64.com</title>
        <meta
          name="description"
          content="Daily blog run by experts about the challenges of planning, coordinating and managing 50u of Arm hardware in multiple, global locations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <script
          async
          defer
          data-domain="arm-64.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
