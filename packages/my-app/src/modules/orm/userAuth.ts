import { DataTypes, Optional, Model } from 'sequelize';
import { sequelize } from './pg';

type UserAuthAttributes = {
  id: number;
  UserId: number;
  Token: string;
  RefreshToken: string;
  TokenExpiredAt: Date;
};

type UserAuthCreationAttributes = Optional<UserAuthAttributes, 'id'>;

export const UserAuth = sequelize.define<Model<UserAuthAttributes, UserAuthCreationAttributes>>(
  'UserAuth',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    Token: {
      type: DataTypes.STRING,
      unique: true,
    },
    RefreshToken: {
      type: DataTypes.STRING,
      unique: true,
    },
    TokenExpiredAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'UserAuths',
  }
);
