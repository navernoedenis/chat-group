import client from "client";

interface SignIn {
  email: string;
  password: string;
}

interface SignInResponse {
  accessToken: string;
  user: User;
  rooms: Room[];
}

interface SignUp extends SignIn {
  name: string;
}

interface SignUpResponse {
  message: string;
}

const httpSignIn = async (data: SignIn) => {
  return await client.post<SignInResponse>("/auth/sign-in", data);
};

const httpSignUp = async (data: SignUp) => {
  return await client.post<SignUpResponse>("/auth/sign-up", data);
};

const httpLogout = async () => {
  return await client.post("/auth/logout");
};

const AuthService = {
  httpSignIn,
  httpSignUp,
  httpLogout
};

export default AuthService;
