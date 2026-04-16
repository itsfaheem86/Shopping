import express, {NextFunction, Request, Response} from 'express';
import cors from 'cors';
import config from '@config/config';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
  }),
);

app.use(express.json());

app.get('/', (_, res) => {
  res.status(200).json({env: config.nodeEnv});
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res
    .status(error?.status || 500)
    .json(error?.errors || error?.error || {msg: error?.message});
});

export default app;
