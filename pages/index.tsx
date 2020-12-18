import Head from "next/head";
import Header from "@/components/common/Header";
import Hero from "@/components/HomePage/Hero";
import Sponsors from "@/components/HomePage/Sponsors";
import RecentPosts from "@/components/HomePage/RecentPosts";
import Footer from "@/components/common/Footer";

const Home = () => (
  <>
    <Head>
      <title>ARM-64.com</title>
      <meta
        name="description"
        content="Blog ran by experts about the challenges of planning, coordinating and managing 50u of ARM hardware in multiple, global locations."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header />
    <Hero />
    <Sponsors />
    <RecentPosts />
    <Footer />
  </>
);

export default Home;
