import React from "react";
import styles from "../scss/Footer.module.css";
import emailIcon from "../img/email.logo.svg";
import AddButton from "./AddButton.component";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footerContent}>
          <div className={styles.synical}>
            <h1>
              Synical <code>Bot</code>
            </h1>
            <div className={styles.email}>
              <img src={emailIcon} alt="emailIcon" />
              <p>Email:Admin@gmail.com</p>
            </div>

            <p>Copyright &copy; Synical Bot, 2021</p>
          </div>
          <div className={styles.page}>
            <h1>Pages</h1>
            <p>
              <NavLink
                to={"/"}
                className={(nav) => (nav.isActive ? styles.active : "")}
              >
                Home
              </NavLink>
            </p>

            <p>
              <NavLink
                to={"/commands"}
                className={(nav) => (nav.isActive ? styles.active : "")}
              >
                Commands
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/contact"}
                className={(nav) => (nav.isActive ? styles.active : "")}
              >
                Contact Us
              </NavLink>
            </p>

            <p>
              <NavLink
                to={"/dev"}
                className={(nav) => (nav.isActive ? styles.active : "")}
              >
                Developers
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/docs"}
                className={(nav) => (nav.isActive ? styles.active : "")}
              >
                Docs
              </NavLink>
            </p>
          </div>
          <div className={styles.term}>
            <h1>Terms Of Service</h1>
            <p>Privacy policy</p>
          </div>
          <div className={styles.footerBtn}>
            <AddButton />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
