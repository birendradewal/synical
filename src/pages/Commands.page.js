import React, { useRef } from "react";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import Title from "../components/Title.component";
import Command from "../components/Command.component";

import styles from "../scss/Commands.module.css";
const Commands = () => {
  const commandsContainerRef = useRef(null);
  const commandRef = useRef(null);
  const commands = [1, 2, 3, 4, 5];

  const handleClick = (index) => {
    const commands = commandsContainerRef.current.children;
    const command = commands[index].children[1];

    for (let i = 0; i < commands.length; i++) {
      if (i === parseInt(index)) {
        command.style.display = "block";
        continue;
      }
      commands[i].children[1].style = "";
    }
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <h3>Synical’s Default Prefix</h3>
        <h3>"|"</h3>
        <p>
          Note: To change your prefix, use !setprefix “your prefix”. Eg:
          !setprefix ?
        </p>
      </div>
      <Title>Commands</Title>
      <nav>
        <p>Moderation</p>
        <p>Economy</p>
        <p>Modmail</p>
      </nav>

      <div className={styles.commandsContainer} ref={commandsContainerRef}>
        {commands.map((command, index) => (
          <Command
            styles={styles}
            key={command}
            actualRef={commandRef}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default Commands;
