import axios, { mockAdapter } from "src/utils/axios";

mockAdapter.onPost("/users/login").reply(200, {
  profile: {
    userName: "Ronin Wallet",
    walletAddress: "7300 3777 3888 3334",
    token: "795b160f-f312-4e63-b72a-262da5902978",
  },
  balances: {
    eur: 50,
    yen: 10000,
    usd: 1000,
  },
});

export const login = async (passwords: string) => {
  const response = await axios.post("/users/login", { passwords });
  return response;
};

mockAdapter.onPost("/users/send").reply(200, {
  status: "success",
  balances: {
    eur: 50,
    yen: 10000,
    usd: 1000,
  },
});

export const send = async (to: string, asset: string, amount: number) => {
  const response = await axios.post("/users/send", { to, asset, amount });
  return response;
};
