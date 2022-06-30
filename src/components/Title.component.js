import React from "react";

import styles from "../scss/Title.module.css";

const Title = ({ children }) => {
  return (
    <>
      <div className={styles.titleWrapper}>
        <h2>{children}</h2>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default Title;
