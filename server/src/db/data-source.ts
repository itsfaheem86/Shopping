// import config from '@config/config';
// import {DataSource} from 'typeorm';
// import path from 'path';
// import {User} from '@entities/user';

// export const db = new DataSource({
//   type: 'postgres',
//   host: config.dbHost,
//   port: config.dbPort,
//   username: config.dbUser,
//   password: config.dbPassword,
//   database: config.dbName,
//   synchronize: config.nodeEnv === 'dev',
//   logging: config.nodeEnv === 'dev',
//   entities: [User],
//   subscribers: [],
//   migrations: [path.join(__dirname, '..', 'migrations', '*.{ts,js}')],
// });

// export const userRepository = db.getRepository(User);
