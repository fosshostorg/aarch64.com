import styles from "@/styles/Footer.module.scss";
import Link from "next/link";
import RSSIcon from "../icons/RSS";
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
    </div>
    <div className={styles.right}>
      <div className={styles.links}>
        <h3>Links</h3>
        <Link href="/contact">Contact Us</Link>
        <Link href="/policy">Our Policy</Link>
        <Link href="/press">Media & Press</Link>
      </div>
      <div className={styles.social}>
        <a
          href="https://twitter.com/fosshostorg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
          <span>Twitter Link</span>
        </a>
        <a href="/feed.xml" target="_blank" rel="noopener noreferrer">
          <RSSIcon />
          <span>RSS Feed</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
