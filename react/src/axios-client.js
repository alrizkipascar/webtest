import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  console.log("token", localStorage.getItem("ACCESS_TOKEN"));
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      console.error("error", error);
      const { response } = error;
      if (response.status == 401) {
        localStorage.removeItem("ACCESS_TOKEN");
      }
      throw error;
    } catch (e) {
      console.error(e);

      throw e;
    }
  }
);

export default axiosClient;
