import React from "react";
import { useHistory, useLocation } from "react-router";
import { Person } from "../components";
import useAgePredictor from "../hooks/useAgePredictor";
import styles from "./css/Prediction.module.css";
import { IoMdArrowBack } from "react-icons/io";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Results = () => {
  const query = useQuery();
  const history = useHistory();
  const names = query.getAll("name");
  const country = query.get("country") !== null ? query.get("country") : null;
  const prediction = useAgePredictor(names, country);
  return (
    <div className={styles.prediction_container}>
      <button className={styles.button} onClick={() => history.goBack()}>
        <IoMdArrowBack />
        <span>Back</span>
      </button>
      {prediction &&
        prediction.map((person, index) => (
          <Person
            name={person.name}
            age={person.age}
            country={person.country_id}
          />
        ))}
    </div>
  );
};

export default Results;
