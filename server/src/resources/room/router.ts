import express from "express";
import { handleGetAllRooms } from "./controllers";

const roomRouter = express.Router();

roomRouter.route("/all").get(handleGetAllRooms);

export default roomRouter;
