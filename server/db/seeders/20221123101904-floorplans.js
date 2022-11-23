'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FloorPlans', [
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "A016", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "A016", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "A001", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "A001", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "A002", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "A002", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T001", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T001", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T002", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T002", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T003", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T003", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T004", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T004", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T005", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T005", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T009", createdAt, updatedAt  },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T009", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T006", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T006", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T007", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T007", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T008", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T008", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "A012", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "A012", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T011", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T011", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T013", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T013", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T014", createdAt, updatedAt },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T014", createdAt, updatedAt },
      { name: "Ground Floor", url: "https://picsum.photos/id/125/1000/600", propertyId: "T015", createdAt, updatedAt  },
      { name: "First Floor", url: "https://picsum.photos/id/126/1000/600", propertyId: "T015", createdAt, updatedAt  }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FloorPlans', null);
  }
};
