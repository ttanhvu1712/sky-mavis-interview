import axios, { mockAdapter } from "utils/axios";

mockAdapter.onGet("/foo").reply(200, { quote: "1234" });

export const getAsyncThunkService = async () => {
  const response = await axios.get("/foo");
  return response;
};
