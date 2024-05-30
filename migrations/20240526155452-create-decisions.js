'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Decisions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      riverId: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'Admins',
          key: 'id'
        }
      },
      decision: {
        type: Sequelize.ENUM,
        values: ['approved', 'not approved', 'under review'],
        defaultValue: 'under review'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Decisions');
  }
};