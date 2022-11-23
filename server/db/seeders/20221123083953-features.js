'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Features', [
      { propertyId: "A001", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A001", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A002", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A002", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T001", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T001", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A003", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A003", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A004", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A004", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A005", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A005", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T002", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T002", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T003", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T003", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A006", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A006", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T004", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T004", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T005", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T005", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A007", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A007", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A008", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A008", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A009", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A009", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T006", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T006", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T007", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T007", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A010", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A010", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A011", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A011", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T008", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T008", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A012", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A012", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A013", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A013", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T009", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T009", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T010", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T010", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T011", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T011", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T012", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T012", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T013", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T013", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T014", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T014", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A014", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A014", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A015", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A015", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "T015", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "T015", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
      { propertyId: "A016", iconId: 1, title: "Large pool outside", createdAt, updatedAt },
      { propertyId: "A016", iconId: 2, title: "Pets are allowed", createdAt, updatedAt },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Features', null);
  }
};
