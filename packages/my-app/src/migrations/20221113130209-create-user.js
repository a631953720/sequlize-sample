'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface
      .createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        Name: {
          type: Sequelize.STRING,
          unique: true,
        },
        Password: {
          type: Sequelize.STRING,
        },
        Alias: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        queryInterface.createTable('UserAuths', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          UserId: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id',
            },
          },
          Token: {
            type: Sequelize.STRING,
          },
          RefreshToken: {
            type: Sequelize.STRING,
          },
          TokenExpiredAt: {
            type: Sequelize.DATE,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserAuths');
    await queryInterface.dropTable('Users');
  },
};
