import axios from "axios";
import { useState, useEffect } from "react";
function useFetch(url) {
  const [data, setdata] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(url);
        setdata(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, [url]);
  return{data,error,loading}
}
export default useFetch;
