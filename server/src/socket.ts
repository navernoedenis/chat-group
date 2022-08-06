import { Server as HttpServer } from "http";
import { Server } from "socket.io";

import {
  handleRoomCreate,
  handleRoomEnter,
  handleRoomLeave,
  handleRoomMessageCreate,
  handleRoomMessagesGet,
  handleRoomSetActive
} from "./resources/room/controllers-socket";

import { handleRoomUsersGet } from "./resources/room-users/controllers-socket";

const CLIENT_URI = process.env.CLIENT_URI as string;

export const startSocketServer = (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
      origin: CLIENT_URI,
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    socket.on("room:create", handleRoomCreate(io));
    socket.on("room:enter", handleRoomEnter(socket, io));
    socket.on("room:leave", handleRoomLeave(socket));
    socket.on("room:message:create", handleRoomMessageCreate(io));
    socket.on("room:messages:get", handleRoomMessagesGet(socket));
    socket.on("room:set:active", handleRoomSetActive(socket));
    socket.on("room:users:get", handleRoomUsersGet(socket));
  });
};
