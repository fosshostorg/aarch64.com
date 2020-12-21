import styles from "@/styles/HomePage/RecentPosts.module.scss";
import Link from "next/link";

const RecentPostCard = ({ post }) => (
  <Link href={`/post/${post.slug}`}>
    <div className={styles.post}>
      <div className={styles.overlay}></div>
      <h1>{post.title}</h1>
      <div className={styles.meta}>
        <div className={styles.avatar}>
          <img
            src={`/avatars/${post.author
              .toLowerCase()
              .replace(/\W/g, "-")}.png`}
            alt={`Avatar for ${post.author}`}
          />
        </div>
        <div className={styles.author}>{post.author}</div>
        <div className={styles.separator}>·</div>
        <div className={styles.date}>
          {new Date(post.date).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour12: true,
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
      </div>
    </div>
  </Link>
);

export default RecentPostCard;
