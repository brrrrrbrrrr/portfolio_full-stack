/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

let apiSingleton = null;

const apiUrl = "http://srv441095.hstgr.cloud:5001/api";

const useApi = () => {
  if (!apiSingleton) {
    apiSingleton = axios.create({
      // baseURL: import.meta.env.VITE_APP_API_URL,
      baseURL: apiUrl,
    });
  }
  return apiSingleton;
};

export default useApi;
