import React, { useState } from "react";
import { useHistory } from "react-router";
import { LocationSelector, TextInput } from "../components";

const Home = () => {
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
        `results?name=${state.name
          .filter((empty) => empty !== "")
          .join("&name=")}${
          state.countryCode && `&country=${state.countryCode}`
        }`
      );
    return setState((prev) => ({ ...prev, errorMsg: "Name cannot be empty." }));
  };
  return (
    <div>
      {state.name && state.name.map((name) => `${name}`)}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <TextInput name="name" id="name" setState={setState} state={state} />
        {state.errorMsg !== "" && <p>{state.errorMsg}</p>}
        <LocationSelector setState={setState} />
      </form>
    </div>
  );
};

export default Home;
