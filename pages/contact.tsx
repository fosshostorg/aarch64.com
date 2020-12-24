import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useState } from "react";
import styles from "@/styles/ContactPage.module.scss";
import btnStyle from "@/styles/Button.module.scss";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Header />
      <div className={styles.contactPage}>
        <h1>Contact Us</h1>
        <form
          name="contact"
          action="/success"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <div className={styles.formInput}>
            <label htmlFor="nameInput">Name:</label>
            <input
              type="text"
              id="nameInput"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="emailInput">E-mail:</label>
            <input
              type="email"
              id="emailInput"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="messageInput">Message:</label>
            <textarea
              name="message"
              id="messageInput"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className={btnStyle.button}>
            Send
          </button>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
