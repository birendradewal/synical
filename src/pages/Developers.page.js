import { React } from "react";

import styles from "../scss/developers.module.css";

import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import DeveloperCard from "../components/DeveloperCard.component";

const Developers = () => {
  const developers = [
    {
      img: "https://images.unsplash.com/photo-1656523267493-31b9b2cfdc47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      title: "Bishal",
      des: "Dev",
    },
    {
      img: "https://images.unsplash.com/photo-1656634064343-39ff5269d651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      title: "Nishan",
      des: "Dev",
    },
    {
      img: "https://images.unsplash.com/photo-1656534938872-0d8c633a90e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Gp",
      des: "Dev",
    },
    {
      img: "https://images.unsplash.com/photo-1656332899086-66e42c982112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Birendra",
      des: "Dev",
    },
    {
      img: "https://images.unsplash.com/photo-1656582117878-165d992214f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Sangita",
      des: "Dev",
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.developerTitle}>
        <h1>Developers / Our Teams</h1>
      </div>
      <div className={styles.devContainer}>
        {developers.map((dev) => (
          <DeveloperCard data={dev} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Developers;
