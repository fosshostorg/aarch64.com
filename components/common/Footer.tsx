import styles from "@/styles/Footer.module.scss";
import Link from "next/link";
import TwitterIcon from "../icons/Twitter";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.left}>
      <h2>
        Made by <a href="https://fosshost.org">Fosshost</a>.
      </h2>
      <p>
        We are not affiliated with Arm Holdings or any of it’s subsidiaries. We
        are a Fosshost project.
      </p>
      <img src="/fosshost-badge.png" alt="Fosshost badge" />
    </div>
    <div className={styles.right}>
      <div className={styles.links}>
        <h3>Links</h3>
        <Link href="/contact">Contact Us</Link>
        <Link href="/policy">Our Policy</Link>
      </div>
      <div className={styles.social}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
          <span>Twitter Link</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
