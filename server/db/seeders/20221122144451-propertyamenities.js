'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('PropertyAmenities', [
      { propertyId: "A001", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A001", amenityId: 2, createdAt, updatedAt },
      { propertyId: "A002", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A002", amenityId: 13, createdAt, updatedAt },
      { propertyId: "T001", amenityId: 1,createdAt, updatedAt },
      { propertyId: "T001", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A003", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A003", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A004", amenityId: 7,createdAt, updatedAt },
      { propertyId: "A004", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A005", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A005", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T002", amenityId: 1,createdAt, updatedAt },
      { propertyId: "T002", amenityId: 3, createdAt, updatedAt },
      { propertyId: "T003", amenityId: 1,createdAt, updatedAt },
      { propertyId: "T003", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A006", amenityId: 11, createdAt, updatedAt },
      { propertyId: "A006", amenityId: 22, createdAt, updatedAt },
      { propertyId: "T004", amenityId: 15, createdAt, updatedAt },
      { propertyId: "T004", amenityId: 18, createdAt, updatedAt },
      { propertyId: "T005", amenityId: 16, createdAt, updatedAt },
      { propertyId: "T005", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A007", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A007", amenityId: 15, createdAt, updatedAt },
      { propertyId: "A008", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A008", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A009", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A009", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T006", amenityId: 1,createdAt, updatedAt },
      { propertyId: "T006", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T007", amenityId: 1,createdAt, updatedAt },
      { propertyId: "T007", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A010", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A010", amenityId: 3, createdAt, updatedAt },
      { propertyId: "A011", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A011", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T008", amenityId: 16, createdAt, updatedAt },
      { propertyId: "T008", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A012", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A012", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A013", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A013", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T009", amenityId: 18, createdAt, updatedAt },
      { propertyId: "T009", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T010", amenityId: 1,createdAt, updatedAt },
      { propertyId: "T010", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T011", amenityId: 12, createdAt, updatedAt },
      { propertyId: "T011", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T012", amenityId: 1,createdAt, updatedAt },
      { propertyId: "T012", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T013", amenityId: 11, createdAt, updatedAt },
      { propertyId: "T013", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T014", amenityId: 1,createdAt, updatedAt },
      { propertyId: "T014", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A014", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A014", amenityId: 23, createdAt, updatedAt },
      { propertyId: "T015", amenityId: 19, createdAt, updatedAt },
      { propertyId: "T015", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A015", amenityId: 1,createdAt, updatedAt },
      { propertyId: "A015", amenityId: 23, createdAt, updatedAt },
      { propertyId: "A016", amenityId: 20, createdAt, updatedAt },
      { propertyId: "A016", amenityId: 23, createdAt, updatedAt },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PropertyAmenities', null);
  }
};
