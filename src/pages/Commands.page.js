import React from "react";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import styles from "../scss/Commands.module.css";
import Title from "../components/Title.component";
import "../components/Command.Container.component";
import downArrow from "../img/arrowdown.svg";
const Commands = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h3>Synical’s Default Prefix</h3>
        <h3>"|"</h3>
        <p>
          Note: To change your prefix, use !setprefix “your prefix”. Eg:
          !setprefix ?
        </p>
      </div>
      <Title>Commands</Title>
      <nav>
        <p>Moderation</p>
        <p>Economy</p>
        <p>Modmail</p>
      </nav>
      <div className={styles.commands}>
        <div className={styles.navContainer}>
          <img src={downArrow} alt="arrow" />
          <h4>help</h4>
        </div>
        <div className={styles.hyphen}></div>
      </div>

      <Footer />
    </>
  );
};
export default Commands;
