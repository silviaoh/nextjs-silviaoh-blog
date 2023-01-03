import axios from 'axios';

const axiosInterceptor = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000,
});

axiosInterceptor.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInterceptor.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInterceptor;
