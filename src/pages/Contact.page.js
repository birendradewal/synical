import React from "react";

import styles from "../scss/contact.module.css";

import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import talksIcon from "../img/talks.png";

const Contact = () => {
  return (
    <>
      <Header />
      <div className={styles.contactForm}>
        <div className={styles.picture}>
          <h3>Let’s Talk!</h3>
          <img src={talksIcon} alt="talksIcon" />
          <p>Email: admin@gmail.com</p>
        </div>
        <div className={styles.contactLogin}>
          <div className={styles.contactDes}>
            <p>name</p>
            <input type="text" />
            <p>E-Mail</p>
            <input type="email" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
