import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Head from "next/head";
import styles from "@/styles/404Page.module.scss";
import Link from "next/link";
import LinkButton from "@/components/common/LinkButton";

const Custom404 = () => (
  <>
    <Head>
      <title>404 - File Not Found | AArch64.com</title>
    </Head>
    <Header />
    <div className={styles.page404}>
      <div className={styles.left}>
        <h2>Oops! Could not find the page you requested.</h2>
        <p>
          Don't worry, mistakes happen. You can go read the{" "}
          <Link href="/blog">
            <a>blog</a>
          </Link>{" "}
          or return to the homepage.
        </p>
        <LinkButton href="/">Return to Home</LinkButton>
      </div>
      <div className={styles.right}>
        <h1>404</h1>
      </div>
    </div>
    <Footer />
  </>
);

export default Custom404;
