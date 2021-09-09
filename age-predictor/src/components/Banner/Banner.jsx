import React from "react";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div>Age-Predictor</div>
      <div className={styles.text}>Predict the age of the person with his/her name.</div>
      <div className={styles.text}>Multiple names can be typed separating with a (,) (comma).</div>
      <div className={styles.text}>Example: Maria, Pedro, Mateo, Juliana</div>
    </div>
  );
};

export default Banner;
