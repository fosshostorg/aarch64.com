import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Head from "next/head";
import styles from "@/styles/Blog/BlogPage.module.scss";

const Blog = () => (
  <>
    <Head>
      <title>Blog | Arm-64.com</title>
    </Head>
    <Header />
    <div className={styles.blogPage}>
      <h1>Blog</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <div className={styles.thumbnail}>
            <div className={styles.overlay} />
            <img src="/thumbnails/2.jpg" alt="Thumb 1" />
          </div>
          <div className={styles.info}>
            <div className={styles.date}>December 19, 2020</div>
            <h1 className={styles.title}>
              This is the title for our very first blog post. The title spans
              three lines.
            </h1>
            <div className={styles.meta}>
              <div className={styles.avatar}>
                <img src="/avatars/avatar1.png" alt="John Doe" />
              </div>
              <div className={styles.author}>John Doe</div>
            </div>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.thumbnail}>
            <div className={styles.overlay} />
            <img src="/thumbnails/2.jpg" alt="Thumb 1" />
          </div>
          <div className={styles.info}>
            <div className={styles.date}>December 18, 2020</div>
            <h1 className={styles.title}>Very small title.</h1>
            <div className={styles.meta}>
              <div className={styles.avatar}>
                <img src="/avatars/avatar2.png" alt="John Doe" />
              </div>
              <div className={styles.author}>Jane Doe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Blog;
