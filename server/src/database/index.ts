import { sequelize } from "./sequelize";

import {
  Message,
  MessageModel,
  MessageModelCreation
} from "../resources/message/model";

import { Room, RoomModel, RoomModelCreation } from "../resources/room/model";

import {
  RoomUsers,
  RoomUsersModel,
  RoomUsersModelCreation
} from "../resources/room-users/model";

import { User, UserModel, UserModelCreation } from "../resources/user/model";

Room.belongsToMany(User, { through: RoomUsers });
User.belongsToMany(Room, { through: RoomUsers });
RoomUsers.belongsTo(Room);
RoomUsers.belongsTo(User);

Room.hasMany(RoomUsers);
User.hasMany(RoomUsers);

Room.hasMany(Message);
Message.belongsTo(Room);
Message.belongsTo(User);

export {
  Message,
  MessageModel,
  MessageModelCreation,
  Room,
  RoomModel,
  RoomModelCreation,
  RoomUsers,
  RoomUsersModel,
  RoomUsersModelCreation,
  sequelize,
  User,
  UserModel,
  UserModelCreation
};
