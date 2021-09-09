import React from "react";
import useListOfCountries from "../../hooks/useListOfCountries";
import styles from "./Person.module.css";

const Person = ({ name, age, country }) => {
  const countryName = useListOfCountries(country);
  return (
    <div className={styles.person_container}>
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Age:</strong> {age}
      </div>
      {country && (
        <div>
          <strong>Country:</strong> {countryName && countryName.name}
        </div>
      )}
    </div>
  );
};

export default Person;
