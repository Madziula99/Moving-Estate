'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Messages', 'property_id', 'propertyId');
    await queryInterface.addConstraint('Messages', {
      fields: ['propertyId'],
      type: 'foreign key',
      name: 'cpropertyId',
      references: {
        table: 'Properties',
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Messages', 'property_id');
    await queryInterface.renameColumn('Messages', 'propertyId', 'property_id');
  }
};
