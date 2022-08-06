import { DataTypes, ModelDefined } from "sequelize";
import { sequelize } from "../../database";

export interface MessageModel extends MessageModelCreation {
  id: number;
}

export interface MessageModelCreation {
  text: string;
  roomId: number;
  userId: number;
}

export const Message: ModelDefined<MessageModel, MessageModelCreation> =
  sequelize.define("message", {
    text: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    }
  });
