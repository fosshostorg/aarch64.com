import Link from "next/link";
import styles from "@/styles/Blog/BlogPage.module.scss";
import authors from "@/data/authors";

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
              src={`/avatars/${authors.find((a) => a.id === post.author).img}`}
              alt={`Image of ${authors.find((a) => a.id === post.author).name}`}
            />
          </div>
          <div className={styles.author}>
            {authors.find((a) => a.id === post.author).name}
          </div>
        </div>
      </div>
    </a>
  </Link>
);

export default PostCard;
