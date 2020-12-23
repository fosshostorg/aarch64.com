import styles from "@/styles/HomePage/Sponsors.module.scss";
import sponsors from "@/data/sponsors";

const Sponsors = () => (
  <section className={styles.sponsors}>
    <h2>SUPPORTED BY</h2>
    <div className={styles.list}>
      {sponsors.map((sponsor) => (
        <a
          href={sponsor.link}
          target="_blank"
          key={sponsor.id}
          rel="noopener noreferrer"
        >
          <img src={`/sponsors/${sponsor.img}`} alt={sponsor.name} />
        </a>
      ))}
    </div>
  </section>
);

export default Sponsors;
