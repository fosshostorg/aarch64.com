import styles from "@/styles/HomePage/RecentPosts.module.scss";
import LinkButton from "../common/LinkButton";
import RecentPostCard from "./RecentPostCard";

const RecentPosts = ({ posts }) => (
  <section className={styles.recentPosts}>
    <h2>RECENT POSTS</h2>
    <div className={styles.posts}>
      <div className={styles.featured}>
        <RecentPostCard post={posts[0]} featured={true} />
      </div>
      {posts[1] && posts[2] && (
        <div className={styles.others}>
          <RecentPostCard post={posts[1]} featured={false} />
          <RecentPostCard post={posts[2]} featured={false} />
          <RecentPostCard post={posts[3]} featured={false} />
        </div>
      )}
    </div>
    <LinkButton href="/blog">See All Posts</LinkButton>
  </section>
);

export default RecentPosts;
