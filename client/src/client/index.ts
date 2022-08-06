import axios, { AxiosError, AxiosRequestConfig } from "axios";
import TokenService, { httpCheckRefreshToken } from "services/token";

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_HOST as string,
  withCredentials: true
});

client.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const originalConfig: AxiosRequestConfig & { _retry?: boolean } =
      error.config;

    if (originalConfig.url !== "/auth/sign-in" && error.response) {
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const { data } = await httpCheckRefreshToken();
          TokenService.setToken(data.accessToken);
          return client(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default client;
