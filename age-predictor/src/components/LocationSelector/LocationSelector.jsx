import React from "react";
import styles from "./LocationSelector.module.css";
import useListOfCountries from "../../hooks/useListOfCountries";

const LocationSelector = ({ setState, name, id, label }) => {
  const countries = useListOfCountries();
  const handleChange = (e) => {
    const input = e.target.value !== "null" ? e.target.value : null;
    setState((prev) => ({
      ...prev,
      countryCode: input,
    }));
  };
  return (
    <>
      {countries && (
        <>
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
          <select
            className={styles.select}
            defaultValue="null"
            onChange={(e) => handleChange(e)}
            name={name}
            id={id}
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
        </>
      )}
    </>
  );
};

export default LocationSelector;
