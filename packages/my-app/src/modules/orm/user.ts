import { DataTypes, Optional, Model } from 'sequelize';
import { sequelize } from './pg';
import { UserAuth } from './userAuth';

export type UserAttributes = {
  id: number;
  Name: string;
  Password: string;
  Salt: string;
  Alias: string;
};

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

type UserModelAttributes = Model<UserAttributes, UserCreationAttributes>;

export const User = sequelize.define<UserModelAttributes>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Alias: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Users',
  }
);

User.hasOne(UserAuth);
