import { Request, Response } from 'express';
import { serviceOrderCreate, serviceOrderGet } from './orders.service';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  const result = await serviceOrderCreate();
  console.log(result);
  console.log('order post request!');
};

export const getOrder = async (req: Request, res: Response): Promise<void> => {
  const result = await serviceOrderGet();
  console.log(result);
  console.log('order get request');
};
