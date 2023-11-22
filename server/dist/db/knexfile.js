"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
// require('dotenv').config({
//   path: '../src/.env',
// });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../src/.env' });
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexConfig = {
    development: {
        client: 'pg',
        connection: {
            user: process.env.POSTGRES_USER || 'Satoru_OfficePC',
            database: process.env.POSTGRES_DB || 'bulletinboard',
        },
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },
    // staging: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user: 'username',
    //     password: 'password',
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10,
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations',
    //   },
    // },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: './db/migrations',
        },
        // pool: {
        //   min: 2,
        //   max: 10
        // },
        seeds: { directory: './db/seeds' },
    },
};
exports.default = knexConfig;
