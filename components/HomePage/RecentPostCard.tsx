import styles from "@/styles/HomePage/RecentPosts.module.scss";
import Link from "next/link";
import authors from "@/data/authors";

const RecentPostCard = ({ post, featured }) => {
  let author = authors.find((author) => author.id === post.author);
  return (
    <Link href={`/post/${post.slug}`}>
      <a className={styles.post}>
        <div className={styles.thumbnail}>
          <picture>
            <source
              srcSet={require(`../../public/thumbnails/${post.thumbnail}?webp`)}
              type="image/webp"
            />
            <source
              srcSet={require(`../../public/thumbnails/${post.thumbnail}`)}
              type={`image/${post.thumbnail.includes(".png") ? "png" : "jpeg"}`}
            />
            <img
              src={require(`../../public/thumbnails/${post.thumbnail}`)}
              alt={`Thumbnail for ${post.title}`}
              loading="lazy"
            />
          </picture>
        </div>
        <div className={styles.metaContainer}>
          <div className={styles.title}>{post.title}</div>
          {featured && (
            <div className={styles.description}>{post.description}</div>
          )}
          <div className={styles.date}>
            {new Date(post.date).toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour12: true,
              hour: "numeric",
              minute: "numeric",
            })}
          </div>
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
                  src={`../../public/avatars/${author.img}`}
                  alt={`Avatar for ${author.name}`}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className={styles.author}>{author.name}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RecentPostCard;
