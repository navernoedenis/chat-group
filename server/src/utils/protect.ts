import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { AppError } from "./error";
import { User, Room } from "../database";

import TokenService from "../services/token";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      throw new AppError("No authorization token", StatusCodes.FORBIDDEN);
    }

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      throw new AppError("No authorization token", StatusCodes.FORBIDDEN);
    }

    const jwtPayload = TokenService.verifyAccessToken(token);
    if (!jwtPayload) {
      throw new AppError("Invalid token", StatusCodes.UNAUTHORIZED);
    }

    next();
  } catch (error) {
    next(error);
  }
};

export const handleVerifyAccessToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      throw new AppError("No authorization token", StatusCodes.FORBIDDEN);
    }

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      throw new AppError("No authorization token", StatusCodes.FORBIDDEN);
    }

    const jwtPayload = TokenService.verifyAccessToken(token);
    if (!jwtPayload) {
      throw new AppError("Invalid token", StatusCodes.UNAUTHORIZED);
    }

    const user = await User.findByPk(jwtPayload.userId, {
      attributes: {
        exclude: ["password"]
      }
    }).then((u) => (u ? u.toJSON() : null));
    if (!user) {
      throw new AppError("Invalid token", StatusCodes.UNAUTHORIZED);
    }

    res.status(StatusCodes.OK).send({ user });
  } catch (error) {
    next(error);
  }
};

export const handleVerifyRefreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      throw new AppError("No refresh token");
    }

    const jwtPayload = TokenService.verifyRefreshToken(refreshToken);
    if (!jwtPayload) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .clearCookie("refreshToken")
        .send({ error: "Invalid token" });
    }

    const user = await User.findByPk(jwtPayload.userId, {
      attributes: { exclude: ["password"] }
    }).then((u) => (u ? u.toJSON() : null));

    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .clearCookie("refreshToken")
        .send({ error: "Invalid token" });
    }

    const accessToken = TokenService.createAccessToken(user.id);

    res.status(StatusCodes.OK).send({ accessToken, user });
  } catch (error) {
    next(error);
  }
};
