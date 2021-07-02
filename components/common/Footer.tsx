import styles from "@/styles/Footer.module.scss";
import Link from "next/link";
import GitHubIcon from "../icons/Github";
import RSSIcon from "../icons/RSS";
import TwitterIcon from "../icons/Twitter";
import DiscordIcon from "../icons/Discord";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.left}>
      <h2>
        Made by <a href="https://fosshost.org">Fosshost</a>.
      </h2>
      <p>
        We are not affiliated with Arm Limited or any of it’s subsidiaries. Arm is a registered trademark of Arm Limited. We are a Fosshost project.
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
        <a
          href="https://github.com/fosshostorg/aarch64.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          <span>Github Link</span>
        </a>
        <a
          href="https://discord.gg/8MfNdGK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon />
          <span>Discord Link</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
