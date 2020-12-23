import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from "@/styles/SuccessPage.module.scss";
import LinkButton from "@/components/common/LinkButton";

const Success = () => (
  <>
    <Header />
    <main className={styles.successPage}>
      <h1>Success!</h1>
      <p>Successfully submitted the form.</p>
      <LinkButton href="/">Return to Home</LinkButton>
    </main>
    <Footer />
  </>
);

export default Success;
