// import config from '@config/config';
// import {scriptRepository, userRepository} from '@db/data-source';
// import {hash} from 'bcrypt';

// const run = async (runFile: string) => {
//   console.log('Start seeding super admin user...');
//   const superAdminUser = userRepository.create({
//     email: config.superAdminEmail,
//     password: await hash(config.superAdminPassword, 12),
//     name: config.superAdminName,
//     role: 'super_admin',
//   });
//   const insertedResults = await userRepository.save(superAdminUser);
//   await scriptRepository.save({filename: runFile});
//   console.log('Seeded super admin user results', insertedResults);
// };

// export {run};
