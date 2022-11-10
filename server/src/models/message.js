'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {}

  Message.init({
    client_name: DataTypes.STRING,
    client_email: DataTypes.STRING,
    message: DataTypes.TEXT,
    property_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};