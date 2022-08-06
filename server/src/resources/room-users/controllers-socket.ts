import { Socket } from "socket.io";
import { RoomUsers, Room, User } from "../../database";

export const handleRoomUsersGet =
  (socket: Socket) =>
  async ({ roomId }: { roomId: number }) => {
    try {
      if (!roomId) {
        throw new Error("No roomId");
      }

      const roomUsers = await RoomUsers.findAll({
        where: { roomId },
        include: [{ model: User, attributes: { exclude: ["password"] } }],
        attributes: [],
        raw: true,
        nest: true
      });

      socket.nsp.to(socket.id).emit("room users get", roomUsers);
    } catch (error) {
      console.log(error);
    }
  };
