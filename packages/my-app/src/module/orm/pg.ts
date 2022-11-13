import { Sequelize } from "sequelize";

// 透過 new 建立 Sequelize 這個 class，而 sequelize 就是物件 instance
export const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

export async function checkInit() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return true;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false;
  }
}
