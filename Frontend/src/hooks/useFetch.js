import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const useFetch = (endpoint, customConfig, deps) => {
  const [Data, setData] = useState(null);
  const [Errors, setErrors] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(
    () => {
      setisLoading(true);
      apiClient
        .get(endpoint, customConfig)
        .then((res) => {
          setData(res.data);
          setisLoading(false);
        })
        .catch((err) => {
          setErrors(err.message);
          setisLoading(false);
        });
    },
    deps ? deps : []
  );

  return { Data, Errors, isLoading };
};

export default useFetch;
