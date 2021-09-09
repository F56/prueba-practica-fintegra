import React from "react";
import { useLocation } from "react-router";
import useAgePredictor from "../hooks/useAgePredictor";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Results = () => {
  let query = useQuery();
  const names = query.getAll("name");
  const country = query.get("country") !== null ? query.get("country") : null;
  const prediction = useAgePredictor(names, country);
  return (
    <>
      {prediction &&
        prediction.map((person, index) => (
          <div key={index}>
            {`Nombre: ${person.name}, Edad: ${person.age}${
              person.country_id ? `, Pais: ${person.country_id}` : ""
            }`}
            <br />
          </div>
        ))}
    </>
  );
};

export default Results;