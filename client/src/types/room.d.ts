declare interface Room {
  id: number;
  userId: number;
  name: string;
  description: string;
}

declare interface RoomMessage {
  id: number;
  userId: number;
  roomId: number;
  createdAt: Date;
  updatedAt: Date;
}

declare interface RoomCreate {
  userId: number;
  name: string;
  description: string;
}
