import styles from "@/styles/HomePage/Hero.module.scss";
import LinkButton from "../common/LinkButton";

const Hero = () => (
  <main className={styles.hero}>
    <div className={styles.left}>
      <h1>Our journey of providing Arm-based hosting to the open-source community</h1>
      <p>
        Daily blog, run by experts, on the challenges of planning, coordinating
        and managing 50 units of Arm-based hardware in multiple, global
        locations.
      </p>
      <LinkButton href="/blog">Read The Blog</LinkButton>
    </div>
  </main>
);

export default Hero;
