import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modular/products/products.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());

// middleware function to check all client request
app.all('*', async (req: Request, res: Response, next: NextFunction) => {
  console.log({ Path: req?.path, Method: req?.method });
  next();
});

// simple get request
app.get('/', (req: Request, res: Response) => {
  res.send({ status: 200, message: 'route handle successful!' });
});

// all route handler
app.use(productRouter);

export default app;
