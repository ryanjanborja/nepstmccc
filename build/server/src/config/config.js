"use strict";

require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": "ryan",
    "database": "books",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "postgres",
    "password": "ryan",
    "database": "books_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  }
};
//# sourceMappingURL=config.js.map