import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState(
    {
      data: null,
      isLoading: true,
    }
  );

  const getFetch = async ()=> {

    setState(
      {
        ...state,
        isLoading: true,
      }
    );

    const response = await fetch(url);
    const data = response.json();

    setState(
      {
        data,
        isLoading: false,
      }
    );

    console.log(data)
  }

  useEffect(() => {
    getFetch();
  }, []);

  return {
    data,
    isLoading,
  }
}
