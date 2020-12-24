import styles from "@/styles/Header.module.scss";
import Link from "next/link";

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
    </div>
  </nav>
);
export default NavBar;
