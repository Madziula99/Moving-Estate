'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('PropertyAmenities', [
      { propertyId: "A001", amenityId: 1, available: true, createdAt, updatedAt },
      { propertyId: "A001", amenityId: 2, available: true, createdAt, updatedAt },
      { propertyId: "A001", amenityId: 3, available: false, createdAt, updatedAt }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PropertyAmenities', null);
  }
};
