import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AArch64.com</title>
        <meta
          name="description"
          content="Daily blog, run by experts, on the challenges of planning, coordinating and managing 50 units of Arm-based hardware in multiple, global locations."
        />
        {/* <link rel="icon" href="/favicon.png" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          async
          defer
          data-domain="aarch64.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
