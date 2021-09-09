import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Results = () => {
  const [results, setResults] = useState(null);
  let query = useQuery();
  const names = query.getAll("name");
  const country = query.get("country") !== null ? query.get("country") : null;
  useEffect(() => {
    const fetchNames = () => {
      axios({
        method: "GET",
        url: `https://api.agify.io?name[]=${names.join("&name[]=")}${
          country !== null ? `&country_id=${country}` : ""
        }`,
      })
        .then((response) => setResults(response.data))
        .catch((error) => console.log(error));
    };
    fetchNames();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {results &&
        results.map((person, index) => (
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
