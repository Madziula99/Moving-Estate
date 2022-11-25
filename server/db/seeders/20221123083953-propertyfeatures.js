'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('PropertyFeatures', [
      { propertyId: "A001", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A001", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A002", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A002", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T001", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T001", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A003", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A003", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A004", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A004", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A005", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A005", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T002", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T002", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T003", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T003", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A006", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A006", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T004", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T004", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T005", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T005", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A007", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A007", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A008", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A008", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A009", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A009", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T006", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T006", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T007", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T007", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A010", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A010", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A011", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A011", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T008", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T008", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A012", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A012", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A013", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A013", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T009", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T009", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T010", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T010", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T011", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T011", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T012", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T012", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T013", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T013", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T014", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T014", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A014", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A014", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A015", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A015", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T015", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T015", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A016", featureId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A016", featureId: 2, title: "Pets are allowed", createdAt, updatedAt },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PropertyFeatures', null);
  }
};
