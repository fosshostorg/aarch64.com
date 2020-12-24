import Link from "next/link";
import styles from "@/styles/Button.module.scss";

type LinkButtonProps = {
  children: any;
  href: string;
  external?: boolean;
};

const LinkButton = ({ children, href, external }: LinkButtonProps) => {
  if (external) {
    return (
      <a
        className={styles.button}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className={styles.button}>{children}</a>
      </Link>
    );
  }
};

export default LinkButton;
