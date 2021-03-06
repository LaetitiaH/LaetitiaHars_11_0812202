import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});

  const [isLoading, setLoading] = useState(true);

  const [hasError, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { isLoading, data, hasError };
};
