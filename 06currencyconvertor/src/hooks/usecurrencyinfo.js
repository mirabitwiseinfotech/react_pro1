
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const currencyCode = currency.toLowerCase();

    const fetchCurrencyInfo = async () => {
      try {
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode}.json`;

        const response = await fetch(url);

        if (!response.ok) { 
          throw new Error(`Currency API returned ${response.status}`);
        }

        const result = await response.json();

        setData(result[currencyCode] || {});
      } catch (error) {
        console.error("Failed to fetch currency rates:", error);
        setData({});
      }
    };

    fetchCurrencyInfo();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;