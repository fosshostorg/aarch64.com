import Header from "@/components/common/Header";
import Hero from "@/components/HomePage/Hero";
import Sponsors from "@/components/HomePage/Sponsors";
import RecentPosts from "@/components/HomePage/RecentPosts";
import Footer from "@/components/common/Footer";
import paginatedResults from "utils/paginatedResults";

const Home = ({ posts }) => (
  <>
    <Header />
    <Hero />
    <Sponsors />
    <RecentPosts posts={posts} />
    <Footer />
  </>
);

export const getStaticProps = async () => {
  let { posts } = paginatedResults(1);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
