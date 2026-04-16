import config from '@config/config';
import app from './app';

const bootstrap = async () => {
  app.listen(config.port, error => {
    if (error) {
      console.error(error);
    }
    console.log(`Server running on port ${config.port}`);
  });
};

bootstrap();
