import dotenv from 'dotenv';
import { EnvironmentConstants } from '../common/Constants';

dotenv.config();

export const ENV = {
  NODE_ENV: process.env.NODE_ENV || EnvironmentConstants.DEVELOPMENT,
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: parseInt(process.env.DB_PORT || '5432', 10),
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'password',
  DB_NAME: process.env.DB_NAME || 'mydb',
  JWT_SECRET: process.env.JWT_SECRET,
};
