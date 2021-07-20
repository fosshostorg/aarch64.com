import Header from "@/components/common/Header";
import Hero from "@/components/HomePage/Hero";
import Sponsors from "@/components/HomePage/Sponsors";
import RecentPosts from "@/components/HomePage/RecentPosts";
import Footer from "@/components/common/Footer";
import paginatedResults from "utils/paginatedResults";
import generateRSS from "utils/generateRSS";
import fs from "fs";
import getAllPosts from "utils/getAllPosts";

const Home = ({ posts }) => (
  <>
    <Header data-index />
    <Hero />
    <Sponsors />
    <RecentPosts posts={posts} />
    <Footer />
  </>
);

export const getStaticProps = async () => {
  let { posts } = paginatedResults(1);
  let allPosts = getAllPosts();

  const rss = generateRSS(allPosts);

  fs.writeFileSync("./public/feed.xml", rss);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
