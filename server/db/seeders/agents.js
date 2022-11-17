'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    queryInterface.bulkInsert("Agents", [
      {
        name: "Adam Conover",
        location: "Los Angeles, California",
        email: "jsmastery2022@gmail.com",
        photo: "https://picsum.photos/id/600/300"
      },
      {
        name: "John Smith",
        location: "Springfield, Illinois",
        email: "john@example.com",
        photo: "https://picsum.photos/id/698/300"
      },
      {
        name: "Anna Johnson",
        location: "New York, New York",
        email: "anna@example.com",
        photo: "https://picsum.photos/id/631/300"
      },
      {
        name: "Gregory Brown",
        location: "Tallahassee, Florida",
        email: "gregory@example.com",
        photo: "https://picsum.photos/id/687/300"
      },
      {
        name: "Mark Williams",
        location: "Nashville, Tennessee",
        email: "mark@example.com",
        photo: "https://picsum.photos/id/613/300"
      },
      {
        name: "Elizabeth Davis",
        location: "Montpelier, Vermont",
        email: "elizabeth@example.com",
        photo: "https://picsum.photos/id/605/300"
      },
      {
        name: "Matthew Miller",
        location: "Phoenix, Arizona",
        email: "matthew@example.com",
        photo: "https://picsum.photos/id/670/300"
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete("Agents", null);
  }
};
