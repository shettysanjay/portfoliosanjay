import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com/";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url)
        .then((resp) => setResponse(resp.data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);
  return { response, loading, error };
};

export default useAxios;
