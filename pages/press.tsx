import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from "@/styles/PressPolicyPages.module.scss";

const Press = () => (
  <>
    <Header />
    <div className={styles.pressPage}>
      <h1>Media & Press</h1>
      <p>
        We are always interested in talking to like minded groups, individuals,
        organizations, journalists, and ecosystems that are interested in the
        work that we do to enable Arm-64 in the data center environment.
      </p>
      <p>
        Our bloggers will consider talks, attending virtual events, sharing
        their experiences, and presenting opportunities where there is a clear
        benefit to the open-source community.
      </p>
      <p>
        If you would like to have a conversation with our public relations team,
        please email{" "}
        <a href="mailto:media@fosshost.org">media (at) fosshost.org</a>.
      </p>
    </div>
    <Footer />
  </>
);

export default Press;
