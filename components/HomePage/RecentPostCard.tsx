import styles from "@/styles/HomePage/RecentPosts.module.scss";
import Link from "next/link";
import authors from "@/data/authors";

const RecentPostCard = ({ post }) => {
  let author = authors.find((author) => author.id === post.author);
  return (
    <Link href={`/post/${post.slug}`}>
      <a
        className={styles.post}
        style={{
          backgroundImage: `linear-gradient(10deg, rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${require(`../../public/thumbnails/${post.thumbnail}`)})`,
        }}
      >
        <div className={styles.overlay}></div>
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
                src={`../../public/avatars/${author.img}`}
                alt={`Avatar for ${author.name}`}
                loading="lazy"
              />
            </picture>
          </div>
          <div className={styles.author}>{author.name}</div>
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
};

export default RecentPostCard;
