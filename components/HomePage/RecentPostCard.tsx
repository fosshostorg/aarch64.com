import styles from "@/styles/HomePage/RecentPosts.module.scss";
import Link from "next/link";
import authors from "@/data/authors";

const RecentPostCard = ({ post }) => (
  <Link href={`/post/${post.slug}`}>
    <a
      className={styles.post}
      style={{
        backgroundImage: `linear-gradient(10deg, rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(/thumbnails/${post.thumbnail})`,
      }}
    >
      <div className={styles.overlay}></div>
      <h1>{post.title}</h1>
      <div className={styles.meta}>
        <div className={styles.avatar}>
          <img
            src={`/avatars/${authors.find((a) => a.id === post.author).img}`}
            alt={`Avatar for ${authors.find((a) => a.id === post.author).name}`}
          />
        </div>
        <div className={styles.author}>
          {authors.find((a) => a.id === post.author).name}
        </div>
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
    </a>
  </Link>
);

export default RecentPostCard;
