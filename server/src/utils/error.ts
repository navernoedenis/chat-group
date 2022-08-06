import { Request, Response, NextFunction } from "express";
import { ValidationError } from "sequelize";
import { StatusCodes } from "http-status-codes";

export class AppError {
  constructor(
    public errorMessage: string,
    public statusCode: number = StatusCodes.BAD_REQUEST
  ) {}
}

export class CustomError {
  constructor(public error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    if (error instanceof ValidationError) {
      throw new Error(error.errors[0].message);
    }
  }
}

export function handleErrorMiddleware(
  error: AppError | ValidationError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    res.status(error.statusCode).send({ error: error.errorMessage });
  }

  if (error instanceof ValidationError) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ error: error.errors[0].message });
  }
}
