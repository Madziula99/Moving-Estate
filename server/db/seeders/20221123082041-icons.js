'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Icons', [
      { icon: "pow", createdAt, updatedAt },
      { icon: "pool", createdAt, updatedAt },
      { icon: "fence", createdAt, updatedAt },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Icons', null);
  }
};
