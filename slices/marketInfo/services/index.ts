import axios, { mockAdapter } from "utils/axios";

mockAdapter
  .onPost("/markets/exchangeRates", {
    params: { target: "vnd" },
  })
  .reply(200, {
    exchangeRates: {
      eur: 50,
      yen: 10000,
      usd: 1000,
    },
  });

export const getExchangeRates = async (target: string) => {
  const response = await axios.post("/markets/exchangeRates", {
    params: { target },
  });
  return response;
};
