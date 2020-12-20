import styles from "@/styles/Header.module.scss";
import NavBar from "@/components/common/NavBar";

const Header = () => (
  <header className={styles.header}>
    <a href="/" className={styles.logo}>
      <object data="/logo.svg" type="image/svg+xml">
        <img src="/logo.png" alt="Arm-64.com Logo" />
      </object>
    </a>
    <NavBar />
  </header>
);

export default Header;
