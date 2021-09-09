import { useState, useEffect } from "react";
import axios from "axios";

const useListOfCountries = (countryCode) => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    const fetchCountries = async (code) => {
      if (code !== undefined)
        // Si el countryCode esta especificado retorna el pais referente al codigo.
        return axios({ method: "GET", url: "https://restcountries.eu/rest/v2/alpha/" + code })
          .then((response) => setCountries(response.data))
          .catch((error) => {
            console.log(error);
            setCountries(null);
          });
      // Si el countryCode no esta especificado retorna todos los paises.
      return axios({ method: "GET", url: "https://restcountries.eu/rest/v2/all" })
        .then((response) => setCountries(response.data))
        .catch((error) => {
          console.log(error);
          setCountries(null);
        });
    };
    fetchCountries(countryCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return countries;
};

export default useListOfCountries;