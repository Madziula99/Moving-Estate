'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    queryInterface.bulkInsert('Messages', [
      { client_name: 'John Doe', client_email: 'john@example.com', message: "Please contact me", property_id: "A001", createdAt, updatedAt },
      { client_name: 'Anna Smith', client_email: 'anna@example.com', message: "Hi. Please contact me", property_id: "A012", createdAt, updatedAt },
      { client_name: 'Alicia Florick', client_email: 'alicia@example.com', message: "I have some more questions about the house", property_id: "T003", createdAt, updatedAt },
      { client_name: 'Penny Green', client_email: 'penny@example.com', message: "Can you tell me more about the neighborhood?", property_id: "A001", createdAt, updatedAt },
      { client_name: 'John Doe', client_email: 'john@example.com', message: "I want to ask you about the details of the offer", property_id: "A001", createdAt, updatedAt },
    ]);

  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Messages', null);
  }
};
