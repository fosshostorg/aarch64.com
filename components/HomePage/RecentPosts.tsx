import styles from "@/styles/HomePage/RecentPosts.module.scss";
import LinkButton from "../common/LinkButton";
import RecentPostCard from "./RecentPostCard";

const RecentPosts = ({ posts }) => (
  <div className={styles.recentPosts}>
    <h3>RECENT POSTS</h3>
    <div className={styles.posts}>
      <RecentPostCard post={posts[0]} />
      {posts[1] && posts[2] && (
        <div className={styles.others}>
          <RecentPostCard post={posts[1]} />
          <RecentPostCard post={posts[2]} />
        </div>
      )}
    </div>
    <LinkButton href="/blog">See All Posts</LinkButton>
  </div>
);

export default RecentPosts;
