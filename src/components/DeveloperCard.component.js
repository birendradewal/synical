import React from "react";

import styles from "../scss/developerCard.module.css";

const DeveloperCard = ({ data }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={data.img} alt={data.name} className={styles.photo} />
          <div className={styles.name}>
            <h2>{data.title}</h2>
          </div>
          <div className={styles.des}>
            <h3>-{data.des}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperCard;
