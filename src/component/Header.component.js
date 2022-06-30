import React from "react";
import styles from "../scss/header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <h2>Synical</h2>
          <h2>Bot</h2>
        </div>
        <nav>
          <p>Home</p>
          <p>Commands</p>
          <p>Developers</p>
          <p>Docs</p>
          <p>Contact Us</p>
          <p>Add to Discord</p>
        </nav>
      </div>
    </header>
  );
};

export default Header;
