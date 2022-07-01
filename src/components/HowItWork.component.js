import React from "react";
import Title from "./Title.component";
import styles from "../scss/home.module.css";
import moderation from "../img/moderation.svg";
import economy from "../img/economy.svg";
import modmail from "../img/modmail.svg";

function HowItWork() {
  return (
    <>
      <div className={styles.howItWorkContainer}>
        <Title>How It Works</Title>
        <div className={styles.moderationContent}>
          <div className={styles.left}>
            <img src={moderation} alt="moderation" />
          </div>
          <div className={styles.right}>
            <h3>Moderation</h3>
            <p>
              Moderation is the process of eliminating or lessening extremes. It
              is used to ensure normality throughout the medium on which it is
              being conducted. Common uses of moderation include: Ensuring
              consistency and accuracy in the marking of student assessments.
            </p>
            <p>
              Our bot helps to moderate / manage your server with it’s built in
              moderation system. It helps to kick, ban or give roles to other
              people of the server.
            </p>
          </div>
        </div>
        <div className={`${styles.moderationContent} ${styles.economyContent}`}>
          <div className={styles.left}>
            <img src={economy} alt="economy" />
          </div>
          <div className={styles.right}>
            <h3>Economy</h3>
            <p>
              An economy is an area of the production, distribution and trade,
              as well as consumption of goods and services by different agents.
              In general, it is defined 'as a social domain that emphasize the
              practices, discourses, and material expressions associated with
              the production, use, and management of resources'.
            </p>
            <p>
              Our bot also helps you to manage and trade your own cash and
              goods.
            </p>
          </div>
        </div>
        <div className={styles.moderationContent}>
          <div className={styles.left}>
            <img src={modmail} alt="modmail" />
          </div>
          <div className={styles.right}>
            <h3>Modmail</h3>
            <p>
              Our bot also helps you to contact your server staff easily. It
              helps your server members to contact your staff easily. It makes
              your staff to work with your server members to solve their
              problems. It helps to make your staff’s work faster and easier.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWork;
