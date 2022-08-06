import argon2 from "argon2";
import { DataTypes, ModelDefined } from "sequelize";
import { sequelize } from "../../database";

export interface UserModel extends UserModelCreation {
  id: number;
}

export interface UserModelCreation {
  email: string;
  name: string;
  password: string;
  image?: string | null;
}

export const User: ModelDefined<UserModel, UserModelCreation> =
  sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3,
        max: 14,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 20],
          msg: "Password must be at least 8 symbols and less than 20 ones."
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      validate: {
        isUrl: true
      }
    }
  });

User.addHook("beforeCreate", async (user) => {
  const me = user.toJSON();
  const hash = await argon2.hash(me.password);
  user.setDataValue("password", hash);
});
