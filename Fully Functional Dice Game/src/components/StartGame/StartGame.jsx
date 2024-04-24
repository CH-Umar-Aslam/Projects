import React from "react";
import styles from "./StartGame.module.css";
import { Button } from "../../styled/Button";
const StartGame = ({ toggle }) => {
  return (
    <section>
      <div className={styles.left}>
        <img src="/images/dice-1.png" alt="image-here" />
      </div>
      <div className={styles.right}>
        <p>DICE GAME</p>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </section>
  );
};

export default StartGame;
