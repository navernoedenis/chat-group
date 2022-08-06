import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Room } from "../../database";

export const handleGetAllRooms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rooms = await Room.findAll({
      order: [["name", "ASC"]]
    });
    res.status(StatusCodes.OK).send({ rooms });
  } catch (error) {
    next(error);
  }
};
