import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.all('*', async (req: Request, res: Response, next: NextFunction) => {
  console.log({ Path: req?.path, Method: req?.method });
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send({ status: 200, message: 'route handle successful!' });
});

export default app;
