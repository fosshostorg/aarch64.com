import styles from "@/styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.left}>
      <h2>Made by Fosshost.</h2>
      <p>
        We are not affiliated with Arm Holdings or any of it’s subsidiaries. We
        are a Fosshost project.
      </p>
      <object data="/logo.svg" type="image/svg+xml">
        <img src="/logo-white.png" alt="Arm-64.com Logo" />
      </object>
    </div>
    <div className={styles.right}>
      <div className={styles.links}>
        <h3>Links</h3>
        <Link href="/">Contact Us</Link>
        <Link href="/policy">Our Policy</Link>
      </div>
      <div className={styles.social}></div>
    </div>
  </footer>
);

export default Footer;
