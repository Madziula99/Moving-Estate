'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Features', [
      { propertyId: "A001", iconId: 2, title: "Allows animals", createdAt, updatedAt },
      { propertyId: "A002", iconId: 1, title: "swimming pool", createdAt, updatedAt }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Features', null);
  }
};
