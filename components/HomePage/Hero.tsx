import Image from "@/components/HomePage/HeroImage";
import styles from "@/styles/HomePage/Hero.module.scss";
import LinkButton from "../common/LinkButton";

const Hero = () => (
  <main className={styles.hero}>
    <div className={styles.left}>
      <h1>Our journey of ARMing the open source community</h1>
      <p>
        Daily blog, run by experts, on the challenges of planning, coordinating
        and managing 50 units of ARM hardware in multiple, global locations.
      </p>
      <LinkButton href="/blog">Read The Blog</LinkButton>
    </div>
    <div className={styles.right}>
      <Image />
    </div>
  </main>
);

export default Hero;
