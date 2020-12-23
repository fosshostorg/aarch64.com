import styles from "@/styles/Header.module.scss";
import NavBar from "@/components/common/NavBar";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <object data="/logo.svg" type="image/svg+xml">
        <img src="/logo.png" alt="Arm-64.com Logo" />
      </object>
    </div>
    <NavBar />
  </header>
);

export default Header;
