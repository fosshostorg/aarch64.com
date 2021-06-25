import styles from "@/styles/HomePage/Hero.module.scss";
import LinkButton from "../common/LinkButton";

const Hero = () => (
  <main className={styles.hero}>
    <div className={styles.left}>
      <h1>Our journey of providing Arm-based hosting to the open-source community</h1>
      <p>
        Learn about our journey on the challenges of planning, coordinating
        and managing the deployment of Arm-based hardware to multiple global
        locations.
      </p>
      <LinkButton href="/blog">Follow Our Journey</LinkButton>
    </div>
  </main>
);

export default Hero;
