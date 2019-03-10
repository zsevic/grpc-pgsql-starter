const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'server/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'server/db/seeds'),
    },
  },

  testing: {
    client: 'postgresql',
    connection: {
      host: process.env.TESTDB_HOST,
      user: process.env.TESTDB_USER,
      password: process.env.TESTDB_PASSWORD,
      port: process.env.TESTDB_PORT,
      database: process.env.TESTDB_DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'server/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'server/db/seeds'),
    },
  },
}
