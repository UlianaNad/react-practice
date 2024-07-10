import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { ...options });

      if (!res.ok) throw new Error(res.statusText);
      const result = await res.json();
      setData(result);
      setError(null)
      setLoading(false)
    } catch (error) {
      setError(`${error}. Some error occured`);
      setLoading(false);
    }
   
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {data, loading, error};
};

export default useFetch;
