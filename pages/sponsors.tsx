import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from "@/styles/SponsorsPage.module.scss";
import sponsors from "@/data/sponsors";

const Sponsors = () => (
  <>
    <Head>
      <title>Sponsors | Arm-64.com</title>
    </Head>
    <Header />
    <div className={styles.sponsorSection}>
      <h1>Our Sponsors</h1>
      <div className={styles.list}>
        {sponsors.map((sponsor) => (
          <div className={styles.sponsor}>
            <div className={styles.logo}>
              <img src={`/sponsors/${sponsor.img}`} alt={sponsor.name} />
            </div>
            <div className={styles.info}>
              <a href={sponsor.link} target="_blank" rel="noreferrer noopener">
                <h2>{sponsor.name}</h2>
              </a>
              <p>{sponsor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);

export default Sponsors;
