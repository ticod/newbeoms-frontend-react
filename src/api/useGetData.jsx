import { useEffect, useState } from 'react';
import API from './API';

function useGetData(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData(url) {
    await API.get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    try {
      fetchData(url);
    } catch(e) {
      setError(e);
      console.log(e);
    }
  }, [url]);

  return { data, error, isLoading }
}

export default useGetData;