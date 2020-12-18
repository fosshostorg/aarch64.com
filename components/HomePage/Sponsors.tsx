import styles from "@/styles/HomePage/Sponsors.module.scss";
import sponsors from "@/data/sponsors";

const Sponsors = () => (
  <div className={styles.sponsors}>
    <h3>SUPPORTED BY</h3>
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
  </div>
);

export default Sponsors;
