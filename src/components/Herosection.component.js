import React from "react";
import styles from "../scss/heroSection.module.css";
import discordimg from "../img/discord.svg";

import AddButton from "./AddButton.component";

const Herosection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.wrapper}>
          <div className={styles.desc}>
            <h1>Make Your Server Better With Us!</h1>
            <p>Moderation, Economy and Modmail Bot</p>
            <div className={styles.buttons}>
              <AddButton />
              <button className={styles.secondaryButton}>
                Join Our Server
              </button>
            </div>
          </div>
          <img src={discordimg} alt="discordimg" />
        </div>
      </section>
    </>
  );
};

export default Herosection;
