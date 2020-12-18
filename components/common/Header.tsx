import styles from "@/styles/Header.module.scss";
import NavBar from "@/components/common/NavBar";

const Header = () => (
  <header className={styles.header}>
    <a href="/" className={styles.logo}>
      <img src="/logo.png" alt="Arm-64.com Logo" />
    </a>
    <NavBar />
  </header>
);

export default Header;
