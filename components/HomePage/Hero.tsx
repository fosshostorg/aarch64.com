import Image from "@/components/HomePage/HeroImage";
import styles from "@/styles/HomePage/Hero.module.scss";
import LinkButton from "../common/LinkButton";

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.left}>
      <h1>Our journey of ARMing the open source community</h1>
      <p>
        Daily blog run by experts about the challenges of planning, coordinating
        and managing 50u of ARM hardware in multiple, global locations.
      </p>
      <LinkButton href="/blog">Read The Blog</LinkButton>
    </div>
    <div className={styles.right}>
      <Image />
    </div>
  </div>
);

export default Hero;
