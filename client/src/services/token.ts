import client from "client";
const accessToken = "accessToken";

const getToken = () => {
  const token = localStorage.getItem(accessToken);

  return token ? (JSON.parse(token) as string) : null;
};

const setToken = (token: string) => {
  localStorage.setItem(accessToken, JSON.stringify(token));
};

const removeToken = () => {
  localStorage.removeItem(accessToken);
};

const TokenService = {
  getToken,
  setToken,
  removeToken
};

export const httpCheckAccessToken = async () => {
  return await client.post<{ user: User }>("/auth/token/access");
};

export const httpCheckRefreshToken = async () => {
  return await client.post<{ accessToken: string; user: User }>(
    "/auth/token/refresh"
  );
};

export default TokenService;
