import { DataTypes, ModelDefined } from "sequelize";
import { sequelize, Room, User } from "../../database";

export interface RoomUsersModel extends RoomUsersModelCreation {
  id: number;
}

export interface RoomUsersModelCreation {
  roomId: number;
  userId: number;
}

export const RoomUsers: ModelDefined<RoomUsersModel, RoomUsersModelCreation> =
  sequelize.define(
    "room_users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  );
