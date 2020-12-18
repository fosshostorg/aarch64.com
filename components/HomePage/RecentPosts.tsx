import styles from "@/styles/HomePage/RecentPosts.module.scss";
import LinkButton from "../common/LinkButton";

const RecentPosts = () => (
  <div className={styles.recentPosts}>
    <h3>RECENT POSTS</h3>
    <div className={styles.posts}>
      <div className={styles.post}>
        <div className={styles.overlay}></div>
        <h1>
          This is a title for a blog post that spans multiple lines, who knows
          how many.
        </h1>
        <div className={styles.meta}>
          <div className={styles.avatar}>
            <img src="/avatars/avatar1.png" alt="John Doe" />
          </div>
          <div className={styles.author}>John Doe</div>
          <div className={styles.separator}>·</div>
          <div className={styles.date}>Dec 17, 2020</div>
        </div>
      </div>
      <div className={styles.others}>
        <div className={styles.post}>
          <div className={styles.overlay}></div>
          <h1>This title is a little bit smaller.</h1>
          <div className={styles.meta}>
            <div className={styles.avatar}>
              <img src="/avatars/avatar2.png" alt="John Doe" />
            </div>
            <div className={styles.author}>Jane Doe</div>
            <div className={styles.separator}>·</div>
            <div className={styles.date}>Dec 17, 2020</div>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.overlay}></div>
          <h1>Very small title.</h1>
          <div className={styles.meta}>
            <div className={styles.avatar}>
              <img src="/avatars/avatar3.png" alt="John Doe" />
            </div>
            <div className={styles.author}>Dane Joe</div>
            <div className={styles.separator}>·</div>
            <div className={styles.date}>Dec 17, 2020</div>
          </div>
        </div>
      </div>
    </div>
    <LinkButton href="/blog">See All Posts</LinkButton>
  </div>
);

export default RecentPosts;
