import React from "react";
import downArrow from "../img/arrowdown.svg";

const Command = ({ styles, onClick, actualRef }) => {
  return (
    <div
      className={styles.commandWrapper}
      ref={actualRef}
      onClick={() => onClick()}
    >
      <div className={styles.command}>
        <div className={styles.navContainer}>
          <img src={downArrow} alt="arrow" />
          <h4>help</h4>
        </div>
        <div className={styles.hyphen}></div>
      </div>

      <div className={styles.desc}>
        <div className={styles.line}></div>
        <p>siudiudifdiufwefiusdfisdfksdfkjsd</p>
      </div>
    </div>
  );
};

export default Command;
