import { DataSource } from 'typeorm';
import { ENV } from './env';
import { User } from '../models/User';
import { EnvironmentConstants } from '../common/Constants';
import { Achievement } from '../models/Achievement';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  username: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME,
  entities: [User, Achievement],
  synchronize: ENV.NODE_ENV === EnvironmentConstants.DEVELOPMENT, // Only use in development
  logging: false,
});
