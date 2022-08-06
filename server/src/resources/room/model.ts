import { DataTypes, ModelDefined } from "sequelize";

import { sequelize } from "../../database";

export interface RoomModel extends RoomModelCreation {
  id: number;
}

export interface RoomModelCreation {
  description: string;
  name: string;
  userId: number;
}

export const Room: ModelDefined<RoomModel, RoomModelCreation> =
  sequelize.define(
    "room",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [10, 255]
        }
      }
    },
    { timestamps: false }
  );
