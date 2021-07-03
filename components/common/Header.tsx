import styles from "@/styles/Header.module.scss";
import NavBar from "@/components/common/NavBar";
import Link from "next/link";

const Header = (props) => (
  <header className={styles.header} {...props}>
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <object data="/logo.svg" type="image/svg+xml">
            <img src="/logo.png" alt="aarch64.com Logo" />
          </object>
        </a>
      </Link>
    </div>
    <NavBar />
  </header>
);

export default Header;
