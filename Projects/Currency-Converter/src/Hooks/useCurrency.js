import { useEffect, useState } from "react";

function useCurrency() {
  const [currency, setCurrency] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.rates);
        setCurrency(data.rates);
        setLoading(false);
      });
  }, []);

  return { currency, loading };
}

export default useCurrency;
