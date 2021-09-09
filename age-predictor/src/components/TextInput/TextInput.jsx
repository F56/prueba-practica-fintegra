import React from "react";
import styles from "./TextInput.module.css";

const TextInput = ({ setState, name, id }) => {
  const handleChange = (e) => {
    const input =
      e.target.value !== ""
        ? e.target.value.replace(/\s/g, "").split(",")
        : null;
    setState((prev) => ({
      ...prev,
      name: input,
    }));
  };
  return (
    <input
      className={styles.input}
      type="text"
      name={name}
      id={id}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default TextInput;
