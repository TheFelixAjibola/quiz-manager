import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  //   database: process.env.DB_NAME,
  database: 'quiz',
  //   username: process.env.DB_USERNAME,
  username: 'root',
  //   password: process.env.DB_PASSWORD,
  password: 'Qwerty.1',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
