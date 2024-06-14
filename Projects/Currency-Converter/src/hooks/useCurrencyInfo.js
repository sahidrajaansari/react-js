import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response.rates);
        setData(response.rates);
        // console.log("Data is :",data);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
