import styles from "@/styles/Header.module.scss";
import NavBar from "@/components/common/NavBar";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src="/logo.png" alt="ARM-64.com Logo" />
    </div>
    <NavBar />
  </header>
);

export default Header;
