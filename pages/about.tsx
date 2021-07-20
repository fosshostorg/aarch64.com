import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Head from "next/head";
import styles from "@/styles/AboutPage.module.scss";
import Link from "next/link";

const About = () => (
  <>
    <Head>
      <title>About Us | AArch64.com</title>
    </Head>
    <Header />
    <main className={styles.about}>
      <h1>About AArch64.com</h1>
      <p>
        AArch64.com is a community operated by Fosshost, a non-profit hosting provider
        that supports hundreds of open-source projects with cloud computing
        services. This website was created to track the development and progress
        of the Fosshost Arm-based build project. We provide daily updates on
        our journey, designed to both informative, practical, and provide an
        insight into the Arm world.
      </p>
      <p>
        Our philosophy is to go further together, providing open-source projects
        and communities with a world-class and tailored hosting
        experience. To achieve this, we work with industry leaders, influential
        organizations, and individuals who promote the Arm ecosystem. What will
        you build, test or optimize on Arm technology?
      </p>
      <p>
        This project would not be possible without the support of{" "}
        <a
          href="https://amperecomputing.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ampere Computing
        </a>
        ,{" "}
        <a
          href="https://metal.equinix.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Equinix Metal
        </a>
        ,{" "}
        <a
          href="https://www.custodiandc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CustodianDC
        </a>
        ,{" "}
        <a
          href="https://hivedatacenter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HiveDC
        </a>
        ,{" "}
        <a
          href="https://www.webnx.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WebNX
        </a>
        ,{" "}
        <a
          href="https://www.packetframe.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PacketFrame
        </a>
        , and{" "}
        <a
          href="https://www.netwise.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netwise
        </a>

        . Further details of sponsorships can be found on our{" "}
        <Link href="/sponsors">sponsorship page</Link>.
      </p>
      <h2>Our History</h2>
      <p>
        Our Founder, Thomas Markey, was introduced to Peter Pouliot, Senior
        Developer Advocate at Ampere Computing, in September 2020, by Hector
        Oron, Debian Developer at the Debian Project. This contact kicked off
        the AArch64 project.
      </p>
      <p>
        Following this contact, we have very generously been awarded 55 units of
        Armv8 32 cores (in a single chip), clocked at 3.3GHz, Lenovo machines.
        These machines are currently in the process of being shipped from Santa
        Clara, CA USA to their respective new home.
      </p>
      <p>
        The last few months have been very busy, working behind the scenes to
        create and coordinate a programme of works to further enhance and
        compliment the services of Fosshost, by introducing powerful Armv8
        infrastructure.
      </p>
      <p>
        The resource and effort to make this project is only possible thanks to
        our sponsors, Ampere Computing, and the help of our volunteers, trustees
        and contributors from the Fosshost community.
      </p>
      <p>
        We work in partnership with the Works on Arm Programme ran by Ed
        Vielmetti, Equinix Metal, and have a number of hosting sponsors
        who will support our journey in the managed data centre environment.
      </p>
      <p>
        We hope you enjoy our journey, we want you to be part of that journey,
        so click here to understand how you can help, otherwise, check our blog
        daily for updates from our Arm Team!
      </p>
    </main>
    <Footer />
  </>
);

export default About;
