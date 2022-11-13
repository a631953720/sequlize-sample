import { DataTypes, Optional, Model } from 'sequelize';
import { sequelize } from './pg';

type UserAttributes = {
  id: number;
  Name: string;
  Password: string;
  Alias: string;
};

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export const User = sequelize.define<Model<UserAttributes, UserCreationAttributes>>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    Alias: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'User',
  }
);

