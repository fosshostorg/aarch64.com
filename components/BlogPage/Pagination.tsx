import Link from "next/link";
import styles from "@/styles/Blog/BlogPage.module.scss";

type PaginationProps = {
  current: number;
  prev?: number;
  next?: number;
  last: number;
};

const Pagination = ({ current, prev, next, last }: PaginationProps) => (
  <div className={styles.pagination}>
    {current !== 1 && (
      <Link href="/blog/1">
        <a className={styles.pageLink}>&lt;&lt;</a>
      </Link>
    )}
    {prev && (
      <Link href={`/blog/${prev}`}>
        <a className={styles.pageLink}>&lt;</a>
      </Link>
    )}
    {current !== 1 && (
      <Link href={`/blog/${current - 1}`}>
        <a className={styles.pageLink}>{current - 1}</a>
      </Link>
    )}
    {current && <div className={styles.currentLink}>{current}</div>}
    {current !== last && (
      <Link href={`/blog/${current + 1}`}>
        <a className={styles.pageLink}>{current + 1}</a>
      </Link>
    )}
    {next && (
      <Link href={`/blog/${next}`}>
        <a className={styles.pageLink}>&gt;</a>
      </Link>
    )}
    {current !== last && (
      <Link href={`/blog/${last}`}>
        <a className={styles.pageLink}>&gt;&gt;</a>
      </Link>
    )}
  </div>
);

export default Pagination;
