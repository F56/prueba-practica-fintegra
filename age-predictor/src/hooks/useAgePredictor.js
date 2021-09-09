import { useState, useEffect } from "react";
import axios from "axios";

const useAgePredictor = (names, country) => {
  const [prediction, setPrediction] = useState(null);
  useEffect(() => {
    const fetchNames = () => {
      axios({
        method: "GET",
        url: `https://api.agify.io?name[]=${names.join("&name[]=")}${
          country !== null ? `&country_id=${country}` : ""
        }`,
      })
        .then((response) => setPrediction(response.data))
        .catch((error) => console.log(error));
    };
    fetchNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return prediction;
};

export default useAgePredictor;
