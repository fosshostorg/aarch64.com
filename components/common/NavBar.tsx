import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import button from "@/styles/Button.module.scss";

const NavBar = () => (
  <nav className={styles.nav}>
    <label htmlFor="hamburger">&#9776;</label>
    <input type="checkbox" id="hamburger" />

    <div className={styles.links}>
      <Link href="/">
        <a className={styles.item}>Home</a>
      </Link>
      <Link href="/blog">
        <a className={styles.item}>Blog</a>
      </Link>
      <Link href="/sponsors">
        <a className={styles.item}>Sponsors</a>
      </Link>
      <Link href="/about">
        <a className={styles.item}>About</a>
      </Link>
      <a
        href="https://console.aarch64.com"
        target="_blank"
        rel="noopener noreferrer"
        className={button.button}
      >
        AArch64 Console
      </a>
    </div>
  </nav>
);
export default NavBar;
