import argon2 from "argon2";
import { Response, NextFunction, CookieOptions, Request } from "express";
import { StatusCodes } from "http-status-codes";

import TokenService from "../services/token";
import { RequestBody } from "../types/global";
import { AppError } from "./error";

import { User, UserModelCreation } from "../database";

export const handleSignIn = async (
  req: RequestBody<Pick<UserModelCreation, "email" | "password">>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new AppError("Email and password are required!");
    }

    const user = await User.findOne({
      where: { email }
    }).then((u) => (u ? u.toJSON() : null));

    if (!user) {
      throw new AppError(`No user with email: ${email}`);
    }

    const isPasswordMatch = await argon2.verify(user.password, password);
    if (!isPasswordMatch) {
      throw new AppError(`Wrong password`);
    }

    const { accessToken, refreshToken } = TokenService.createTokens(user.id);

    const cookieOptions: CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production"
    };

    const { password: userPassword, ...userWithoutPassword } = user;

    res
      .status(StatusCodes.OK)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .send({ accessToken, user: userWithoutPassword });
  } catch (error) {
    next(error);
  }
};

export const handleSignUp = async (
  req: RequestBody<UserModelCreation>,
  res: Response,
  next: NextFunction
) => {
  const { email, name, password } = req.body;

  try {
    if (!email || !name || !password) {
      throw new AppError("Email, name and password are required!");
    }

    const isUserExist = await User.findOne({ where: { email } }).then((u) =>
      u ? u.toJSON() : null
    );

    if (isUserExist) {
      throw new AppError(`User with email ${email} already exist!`);
    }

    await User.create(req.body);

    res.status(StatusCodes.OK).send({ message: "User created!" });
  } catch (error) {
    next(error);
  }
};

export const handleLogout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(StatusCodes.OK).clearCookie("refreshToken").end();
  } catch (error) {
    next(error);
  }
};
