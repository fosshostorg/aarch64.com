import Link from "next/link";
import styles from "@/styles/Blog/BlogPage.module.scss";
import authors from "@/data/authors";

const PostCard = ({ post }) => {
  let author = authors.find((a) => a.id === post.author);

  return (
    <Link href={`/post/${post.slug}`}>
      <a href={`/post/${post.slug}`} className={styles.post}>
        <div className={styles.thumbnail}>
          <div className={styles.overlay} />
          {post.thumbnail && (
            <picture>
              <source
                srcSet={require(`../../public/thumbnails/${post.thumbnail}?webp`)}
                type="image/webp"
              />
              <source
                srcSet={require(`../../public/thumbnails/${post.thumbnail}`)}
                type={`image/${
                  post.thumbnail.includes(".png") ? "png" : "jpeg"
                }`}
              />
              <img
                src={require(`../../public/thumbnails/${post.thumbnail}`)}
                alt={`Thumbnail for ${post.title}`}
                loading="lazy"
              />
            </picture>
          )}
          {!post.thumbnail && <div className={styles.thumbColor}></div>}
        </div>
        <div className={styles.info}>
          <div className={styles.date}>{post.date}</div>
          <div className={styles.title}>{post.title}</div>
          <div className={styles.meta}>
            <div className={styles.avatar}>
              <picture>
                <source
                  srcSet={require(`../../public/avatars/${author.img}?webp`)}
                  type="image/webp"
                />
                <source
                  srcSet={require(`../../public/avatars/${author.img}`)}
                  type={`image/${author.img.includes(".png") ? "png" : "jpeg"}`}
                />
                <img
                  src={require(`../../public/avatars/${author.img}`)}
                  alt="Author avatar"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className={styles.author}>
              {authors.find((a) => a.id === post.author).name}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
