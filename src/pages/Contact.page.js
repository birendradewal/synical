import React, { useState } from "react";

import styles from "../scss/contact.module.css";

import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import talksIcon from "../img/talks.png";
import Title from "../components/Title.component";

const Contact = () => {
  const [msg, setMsg] = useState("");

  return (
    <>
      <Header />
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <Title>Contact Us</Title>
          <div className={styles.contactWrapper}>
            <div className={styles.leftPart}>
              <h1>Let’s Talk!</h1>

              <img src={talksIcon} alt="talksIcon" />

              <p>Email: admin@gmail.com</p>
            </div>
            <div className={styles.rightPart}>
              <div className={styles.inputWrapper}>
                <div className={styles.inputField}>
                  <p>Your Name</p>
                  <input type="text" />
                </div>
                <div className={styles.inputField}>
                  <p>Email</p>
                  <input type="email" />
                </div>
              </div>
              <div className={styles.inputField}>
                <p>Subject</p>
                <input type="text" />
              </div>
              <div className={styles.message}>
                <p>Message</p>
                <textarea
                  rows="10"
                  onChange={(e) => setMsg(e.target.value)}
                  value={msg}
                />
                <p style={msg.length > 500 ? { color: "red" } : { color: "" }}>
                  {msg.length} / 500
                </p>
              </div>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
