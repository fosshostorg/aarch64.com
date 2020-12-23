import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Head from "next/head";
import styles from "@/styles/Blog/BlogPage.module.scss";
import paginatedResults from "utils/paginatedResults";
import PostCard from "@/components/BlogPage/PostCard";
import Pagination from "@/components/BlogPage/Pagination";

const Blog = ({ results }) => (
  <>
    <Head>
      <title>Blog | Arm-64.com</title>
    </Head>
    <Header />
    <main className={styles.blogPage}>
      <h1>Blog</h1>
      <div className={styles.posts}>
        {results.posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </div>
      <Pagination current={1} last={results.last} />
    </main>
    <Footer />
  </>
);

export const getStaticProps = async () => {
  const page = 1;

  let results = paginatedResults(page);

  return {
    props: {
      results,
    },
  };
};

export default Blog;
