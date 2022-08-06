import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors, { CorsOptions } from "cors";

import roomRouter from "./resources/room/router";

import { handleErrorMiddleware } from "./utils/error";
import { handleSignIn, handleSignUp, handleLogout } from "./utils/auth";
import {
  protect,
  handleVerifyAccessToken,
  handleVerifyRefreshToken
} from "./utils/protect";

const CLIENT_URI = process.env.CLIENT_URI as string;

const corsOptions: CorsOptions = {
  origin: CLIENT_URI,
  credentials: true
};

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.disable("x-powered-by");

app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/auth/sign-in", handleSignIn);
app.post("/auth/sign-up", handleSignUp);
app.post("/auth/logout", handleLogout);
app.post("/auth/token/access", handleVerifyAccessToken);
app.post("/auth/token/refresh", handleVerifyRefreshToken);

app.use("/api", protect);
app.use("/api/room", roomRouter);

app.use(handleErrorMiddleware);

export default app;
