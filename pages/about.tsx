import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Head from "next/head";
import styles from "@/styles/AboutPage.module.scss";

const About = () => (
  <>
    <Head>
      <title>About Us | Arm-64.com</title>
    </Head>
    <Header />
    <div className={styles.about}>
      <h1>About Arm-64.com</h1>
      <p>
        Arm-64.com is a blog operated by fosshost.org, a non-profit hosting
        provider that supports hundreds of open source projects with
        cloud-computing services. Arm-64.com is here to track the development
        and build progress of the Fosshost Arm-64 build project. We will provide
        daily updates on our journey that intends to be both informative and
        practical and provide an insight into the Arm world.
      </p>
      <p>
        Our philosophy is to go further, together, providing projects with a
        world-class and tailored hosting experience.
      </p>
      <p>
        We work with industry leaders and influential organizations and
        individuals who promote the Arm ecosystem and provide an exclusive
        service to the open source software ecosystem. What will you build, test
        or optimize on Arm?
      </p>
      <p>
        This project would not be possible without the support of Ampere
        Computing, Equinix Metal, CustodianDC, HiveDC, WebNX, Inferno
        Communications, and Packetframe. Further details of sponsorships can be
        found on our sponsorship page.
      </p>
      <h2>Our History</h2>
      <p>
        Our Founder, Thomas Markey was introduced to Peter Pouliot, Senior
        Developer Advocate at Ampere Computing in September 2020 by Hector Oron,
        Debian Developer at the Debian Project.
      </p>
      <p>
        We work in partnership with the Works on Arm Programme ran by Ed
        Vielmetti, Equinix Metal (Packet) and have a number of hosting sponsors
        who will support our journey in the managed data centre environment.
      </p>
      <p>
        The last few months or so we have been busy, working behind the scenes
        to create and coordinate a programme of works to further enhance and
        compliment the services of fosshost by introducing powerful ArmV8
        infrastructure.
      </p>
      <p>
        We have been very generously been awarded 50u of ARMv8 32 core 3.3ghz
        (in a single chip) 1u Lenovo machines. These machines are currently in
        the process of being shipped from the States to their respective new
        home.
      </p>
      <p>
        The resource and effort to make this project is only possible thank you
        to our sponsors, Ampere and the help of our volunteers, trustees and
        contributors from the fosshost community.
      </p>
      <p>
        We hope you enjoy our journey, we want you to be part of that journey,
        so click here to understand how you can help, otherwise, check our blog
        daily for updates from our ARM Team!
      </p>
    </div>
    <Footer />
  </>
);

export default About;
