import React from "react";
import { Predictor, Banner } from "../components";
import styles from "./css/Home.module.css"

const Home = () => {
  
  return (
    <div className={styles.home_container}>
      <Predictor />
      <Banner />
    </div>
  );
};

export default Home;
