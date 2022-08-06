import client from "client";

export const httpGetRooms = async () => {
  return await client.get<{ rooms: Room[] }>("/api/room/all");
};
