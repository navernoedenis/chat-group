import { Socket, Server } from "socket.io";
import {
  Message,
  MessageModelCreation,
  Room,
  RoomModelCreation,
  RoomUsers,
  User
} from "../../database";

export const handleRoomCreate =
  (io: Server) => async (data: RoomModelCreation) => {
    try {
      const room = await Room.create(data, { raw: true });
      io.emit("room create", room);
    } catch (error) {
      console.log("handleRoomCreate ERROR: ", error);
    }
  };

export const handleRoomEnter =
  (socket: Socket, io: Server) =>
  async (data: { userId: number; roomId: number }) => {
    try {
      socket.join(data.roomId + "");

      const isUserExist = await RoomUsers.findOne({
        where: { roomId: data.roomId, userId: data.userId }
      }).then((u) => (u ? u.toJSON() : null));

      if (isUserExist) return;

      await RoomUsers.create(data);

      const user = await User.findByPk(data.userId, {
        attributes: { exclude: ["password"] }
      }).then((u) => u!.toJSON());

      io.in(data.roomId + "").emit("room enter", user);
    } catch (error) {
      console.log("handleRoomCreate ERROR: ", error);
    }
  };

export const handleRoomSetActive =
  (socket: Socket) => async (data: { roomId: number }) => {
    try {
      const room = await Room.findByPk(data.roomId, { raw: true });
      socket.nsp.to(socket.id).emit("room set active", room);
    } catch (error) {
      if (error instanceof Error) {
        console.log("handleRoomCreate ERROR: ", error.message);
      }
    }
  };

export const handleRoomLeave =
  (socket: Socket) => async (data: { userId: number; roomId: number }) => {
    try {
      socket.leave(data.roomId + "");
      await RoomUsers.destroy({ where: data });

      const user = await User.findByPk(data.userId, {
        attributes: ["name"]
      }).then((u) => u!.toJSON());

      socket.to(data.roomId + "").emit("user left", user.name);
    } catch (error) {
      console.log("handleRoomCreate ERROR: ", error);
    }
  };

export const handleRoomMessageCreate =
  (io: Server) => async (data: Required<MessageModelCreation>) => {
    try {
      if (!data.userId || !data.roomId) {
        throw new Error(
          "Can't create message. UserId and RoomId are required!"
        );
      }

      const message = await Message.create(data).then((m) => m.toJSON());

      const roomMessage = await Message.findByPk(message.id, {
        attributes: { exclude: ["roomId", "userId"] },
        include: [{ model: User, attributes: { exclude: ["password"] } }],
        raw: true,
        nest: true
      });

      io.in(data.roomId + "").emit("room message create", roomMessage);
    } catch (error) {
      console.log("handleRoomMessageCreate ERROR: ", error);
    }
  };

export const handleRoomMessagesGet =
  (socket: Socket) =>
  async ({ roomId }: { roomId: number }) => {
    try {
      if (!roomId) throw new Error("No roomId");

      const roomMessages = await Message.findAll({
        where: { roomId },
        attributes: { exclude: ["roomId", "userId"] },
        order: [["createdAt", "ASC"]],
        include: [{ model: User, attributes: { exclude: ["password"] } }],
        raw: true,
        nest: true
      });

      socket.nsp.to(socket.id).emit("room messages get", roomMessages);
    } catch (error) {
      console.log("handleRoomMessageCreate ERROR: ", error);
    }
  };
