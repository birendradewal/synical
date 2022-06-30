import React from "react";
import styles from "../scss/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footerContent}>
          <div className={styles.synical}>
            <h1>
              Synical <code>Bot</code>
            </h1>
            <p>Email:Admin@gmail.com</p>
            <p>Copyright &copy; Synical Bot, 2021</p>
          </div>
          <div className={styles.page}>
            <h1>Pages</h1>
            <p>Home</p>
            <p>Commands</p>
            <p>Contact Us</p>
            <p>Developers</p>
            <p>Docs</p>
          </div>
          <div className={styles.term}>
            <h1>Terms Of Service</h1>
            <p>Privacy policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
