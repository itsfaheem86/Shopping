import config from '@config/config';
import app from './app';
// import {db} from '@db/data-source';

const bootstrap = async () => {
  let dbConnection = null;
  try {
    console.log('Connecting to database...');
    // dbConnection = await db.initialize();
    console.log('Connected to database');
    app.listen(config.port, error => {
      if (error) {
        console.error(error);
      }
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    if (dbConnection) {
      // await dbConnection.destroy();
      console.log('Disconnected to database');
    }
    throw error;
  }
};

bootstrap();
