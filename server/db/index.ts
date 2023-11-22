import knex from 'knex';
import knexConfig from './knexfile';
import dotenv from 'dotenv';
dotenv.config();

const nodeEnv: string = process.env.NODE_ENV ?? '';
let knexEnv: any;
if (nodeEnv === 'development') {
  knexEnv = knex(knexConfig.development);
} else {
  knexEnv = knex(knexConfig.production);
}
export default knexEnv;
