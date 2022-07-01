import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? styles.active : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/commands"}
            className={(nav) => (nav.isActive ? styles.active : "")}
          >
            Commands
          </NavLink>
          <NavLink
            to={"/dev"}
            className={(nav) => (nav.isActive ? styles.active : "")}
          >
            Developers
          </NavLink>
          <NavLink
            to={"/docs"}
            className={(nav) => (nav.isActive ? styles.active : "")}
          >
            Docs
          </NavLink>
          <NavLink
            to={"/contact"}
            className={(nav) => (nav.isActive ? styles.active : "")}
          >
            Contact Us
          </NavLink>
          <NavLink
            to={"/add"}
            className={(nav) => (nav.isActive ? styles.active : "")}
          >
            Add to Discord
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
