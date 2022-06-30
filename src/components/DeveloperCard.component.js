import React from "react";

import styles from "../scss/developerCard.module.css";

const DeveloperCard = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.photo}></div>
          <div className={styles.name}>
            <h2>Name</h2>
          </div>
          <div className={styles.des}>
            <h3> -Des</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperCard;
