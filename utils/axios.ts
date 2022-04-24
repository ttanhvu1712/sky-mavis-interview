import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const axiosInstance = axios.create({
  timeout: 30000,
  withCredentials: true,
});

export const mockAdapter = new AxiosMockAdapter(axiosInstance);
export default axiosInstance;
