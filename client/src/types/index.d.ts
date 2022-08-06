declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare interface RoomId {
  roomId: number;
}

declare interface UserId {
  userId: number;
}

declare interface RoomAndUserIds extends RoomId, UserId {}
