'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert('Messages', [
      { client_name: 'John Doe', client_email: 'john@example.com', message: "Please contact me", propertyId: "A001", createdAt, updatedAt },
      { client_name: 'Anna Smith', client_email: 'anna@example.com', message: "Hi. Please contact me", propertyId: "A012", createdAt, updatedAt },
      { client_name: 'Alicia Florick', client_email: 'alicia@example.com', message: "I have some more questions about the house", propertyId: "T003", createdAt, updatedAt },
      { client_name: 'Penny Green', client_email: 'penny@example.com', message: "Can you tell me more about the neighborhood?", propertyId: "A001", createdAt, updatedAt },
      { client_name: 'John Doe', client_email: 'john@example.com', message: "I want to ask you about the details of the offer", propertyId: "A001", createdAt, updatedAt },
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Messages', null);
  }
};
