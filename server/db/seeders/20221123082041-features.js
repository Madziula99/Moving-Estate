'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Features', [
      { icon: "pool", createdAt, updatedAt },
      { icon: "paw", createdAt, updatedAt },
      { icon: "fence", createdAt, updatedAt },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Features', null);
  }
};
