import React, { useState } from "react";
import styles from "./Predictor.module.css";
import { useHistory } from "react-router-dom";
import { LocationSelector, TextInput } from "..";

const Predictor = () => {
  const history = useHistory();
  const [state, setState] = useState({
    name: null,
    countryCode: "",
    errorMsg: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, errorMsg: "" }));
    if (state.name !== null)
      return history.push(
        `prediction?name=${state.name
          .filter((empty) => empty !== "")
          .join("&name=")}${
          state.countryCode && `&country=${state.countryCode}`
        }`
      );
    return setState((prev) => ({ ...prev, errorMsg: "Name cannot be empty." }));
  };
  return (
    <form
      className={styles.predictor_container}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <TextInput
        label="Name"
        name="name"
        id="name"
        setState={setState}
        state={state}
      />
      {state.errorMsg !== "" && (
        <div className={styles.error}>{state.errorMsg}</div>
      )}
      <LocationSelector
        label="Location"
        name="location"
        id="location"
        setState={setState}
      />
      <button type="submit" className={styles.button}>
        Predict
      </button>
    </form>
  );
};

export default Predictor;
