import React from "react";
import InfoWrapper from "./InfoWrapper";
import styles from './Card.module.css'

const Card = ({ data }) => {

  return (
    <div className={styles.Card}>
      <div className={styles.profileImage}></div>
      <InfoWrapper>
      <h3>Andrea Cardenas</h3>
      <h5>Tech Manager - Level 4</h5>
      <p>Colombia</p>
      </InfoWrapper>
    </div>
  );
};

export default Card;