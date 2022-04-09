import axios from "axios";
import store from "../../../store/index";

axios.interceptors.request.use(
  function (config) {
    const token = store.getters.token ? `Bearer ${store.getters.token}` : "";
    if (token) config.headers.Authorization = token;
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);
