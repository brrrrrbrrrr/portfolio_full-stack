/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

let apiSingleton = null;

// const apiUrl = "https://portfolio.benjamin-chaillan.fr:5001/api/";

const apiUrl = "http://localhost:5001/api";

const useApi = () => {
  if (!apiSingleton) {
    apiSingleton = axios.create({
      baseURL: apiUrl,
    });
  }
  return apiSingleton;
};

export default useApi;
