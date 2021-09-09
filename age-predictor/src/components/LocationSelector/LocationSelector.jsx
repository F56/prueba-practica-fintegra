import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./LocationSelector.module.css";

const LocationSelector = ({ setState }) => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    axios({ method: "GET", url: "https://restcountries.eu/rest/v2/all" })
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    const input =
      e.target.value !== "null"
        ? e.target.value
        : null;
    setState((prev) => ({
      ...prev,
      countryCode: input,
    }));
  };
  return (
    <>
      {countries ? (
        <select
          className={styles.select}
          defaultValue="null"
          onChange={(e) => handleChange(e)}
        >
          <option value="null" disabled={true}>
            Location (Optional)
          </option>
          {countries.map((country) => (
            <option key={country.alpha2Code} value={country.alpha2Code}>
              {country.name}
            </option>
          ))}
        </select>
      ) : (
        <div>Loader</div>
      )}
    </>
  );
};

export default LocationSelector;
