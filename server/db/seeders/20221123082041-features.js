'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Features', [
      { feature: "pool", createdAt, updatedAt },
      { feature: "paw", createdAt, updatedAt },
      { feature: "fence", createdAt, updatedAt },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Features', null);
  }
};
