import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import { UserEntity } from '../auth/entity/user.entity';

export const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  entities: [UserEntity],
  synchronize: true,
};