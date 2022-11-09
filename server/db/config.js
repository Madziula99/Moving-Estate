const { join } = require('path');

const connection = {
  "dialect": "sqlite",
  "storage": join(__dirname, 'main.db'),
};

module.exports = {
  "development": connection,
  "test": connection,
  "production": connection,
};
