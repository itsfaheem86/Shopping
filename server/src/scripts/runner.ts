// import {db, scriptRepository} from '@db/data-source';
// import {promises} from 'fs';
// import path from 'path';

// const runner = async () => {
//   let dbConnection = null;
//   try {
//     console.log('Script runner started');
//     dbConnection = await db.initialize();
//     const files = await promises.readdir(path.join(__dirname, 'run'));
//     const runnerFiles = files.filter(f => /\.(js|ts)$/.test(f));
//     for (const runFile of runnerFiles) {
//       console.log(`Script ${runFile} started running`);
//       const isAlreadyRun = await scriptRepository.findOneBy({
//         filename: runFile,
//       });
//       if (isAlreadyRun) {
//         console.log(`Script "${runFile}" skipped - already executed`);
//         continue;
//       }
//       const {run} = await import(path.join(__dirname, 'run', runFile));
//       await run(runFile);
//       console.log(`Script ${runFile} finished running`);
//     }
//   } catch (e) {
//     console.log(`Script runner failed due to ${e}`);
//   } finally {
//     console.log('Script runner completed');
//     await dbConnection?.destroy();
//   }
// };

// runner();
