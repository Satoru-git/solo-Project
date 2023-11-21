// Update with your config settings.
require('dotenv').config({
  path: '../src/.env',
});
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',

  connection: {
    user: process.env.POSTGRES_USER || 'Satoru_OfficePC',

    database: process.env.POSTGRES_DB || 'bulletin_board',
  },

  migrations: {
    directory: './migrations',
  },

  seeds: { directory: './seeds' },
  // development: {
  //   client: 'pg',
  //   connection: {
  //     user: process.env.POSTGRES_USER || 'Satoru_OfficePC',
  //     database: process.env.POSTGRES_DB || 'bulletin_board',
  //   },
  //   migrations: {
  //     directory: './migrations',
  //   },
  //   seeds: {
  //     directory: './seeds',
  //   },
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     directory: './db/migrations',
  //   },

  //   // pool: {
  //   //   min: 2,
  //   //   max: 10
  //   // },

  //   seeds: { directory: './db/seeds' },
  // },
};
