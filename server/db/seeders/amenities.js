'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Amenities', [
      { title: "Water Cooler", createdAt, updatedAt },
      { title: "Washing Machine", createdAt, updatedAt },
      { title: "Toaster", createdAt, updatedAt },
      { title: "Telephone", createdAt, updatedAt },
      { title: "Stove", createdAt, updatedAt },
      { title: "Sofa Bed", createdAt, updatedAt },
      { title: "Security System", createdAt, updatedAt },
      { title: "Satellite / Cable TV", createdAt, updatedAt },
      { title: "Refrigerator", createdAt, updatedAt },
      { title: "Parking On Street", createdAt, updatedAt },
      { title: "Oven", createdAt, updatedAt },
      { title: "Outdoor Grill", createdAt, updatedAt },
      { title: "Microwave", createdAt, updatedAt },
      { title: "Internet", createdAt, updatedAt },
      { title: "Ice Maker", createdAt, updatedAt },
      { title: "Heating", createdAt, updatedAt },
      { title: "Garage", createdAt, updatedAt },
      { title: "Freezer", createdAt, updatedAt },
      { title: "Air Conditioning", createdAt, updatedAt },
      { title: "Alarm Clock", createdAt, updatedAt },
      { title: "Balcony", createdAt, updatedAt },
      { title: "Clothes Dryer", createdAt, updatedAt },
      { title: "Coffee Maker", createdAt, updatedAt },
      { title: "Deck / Patio", createdAt, updatedAt },
      { title: "Dishes & Utensils", createdAt, updatedAt },
      { title: "Dishwasher", createdAt, updatedAt },
      { title: "Fireplace", createdAt, updatedAt }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Amenities', null);
  }
};
