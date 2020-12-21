import Link from "next/link";
import styles from "@/styles/Blog/BlogPage.module.scss";

const PostCard = ({ post }) => (
  <Link href={`/post/${post.slug}`}>
    <a href={`/post/${post.slug}`} className={styles.post}>
      <div className={styles.thumbnail}>
        <div className={styles.overlay} />
        {post.thumbnail && (
          <img
            src={`/thumbnails/${post.thumbnail}`}
            alt={`Thumbnail for ${post.title}`}
          />
        )}
        {!post.thumbnail && <div className={styles.thumbColor}></div>}
      </div>
      <div className={styles.info}>
        <div className={styles.date}>{post.date}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <div className={styles.avatar}>
            <img
              src={`/avatars/${post.author
                .toLowerCase()
                .replace(/\W/g, "-")}.png`}
              alt={`Image of ${post.author}`}
            />
          </div>
          <div className={styles.author}>{post.author}</div>
        </div>
      </div>
    </a>
  </Link>
);

export default PostCard;
