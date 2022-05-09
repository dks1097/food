import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    yelp
      .get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "porto",
        },
      })
      .then((response) => {
        setResults(response.data.businesses);
      })
      .catch((err) => {
        setErrorMessage("Something went wrong");
      });
  };
  useEffect(() => {
    searchApi("pizza");
  }, []);

  return[searchApi, results, errorMessage];
};
