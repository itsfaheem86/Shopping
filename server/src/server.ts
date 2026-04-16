import config from '@config/config';
import app from './app';

const bootstrap = async () => {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
};

bootstrap();
