import knex from 'knex';
import knexConfig from './knexfile';
import dotenv from 'dotenv';
dotenv.config();
const nodeEnv: any = process.env.NODE_ENV;

console.log('NODE_ENV', nodeEnv); // 現状の'NODE_ENV'設定の確認
module.exports = knex(knexConfig[nodeEnv]);
