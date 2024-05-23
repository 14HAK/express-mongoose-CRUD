import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modular/products/products.routes';
import orderRouter from './app/modular/orders/orders.routes';

const app: Application = express();

app.use(cors());
app.use(express.json());

// middleware function to check all client request
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log({ Path: req?.path, Method: req?.method });
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome home!'
  });
});

// all route handler
app.use(productRouter);
app.use(orderRouter);

app.all('*', (req, res, next) => {
  next(
    res.status(400).json({
      status: 'fail',
      message: 'can not find this route'
    })
  );
});

export default app;
