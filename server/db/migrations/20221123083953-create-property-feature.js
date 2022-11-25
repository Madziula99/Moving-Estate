'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PropertyFeatures', {
      propertyId: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
          model: "Properties",
          key: "id",
          as: "propertyId"
        },
      },
      featureId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Features",
          key: "id",
          as: "featureId"
        },
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PropertyFeatures');
  }
};