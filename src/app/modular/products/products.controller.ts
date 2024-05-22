import { Request, Response } from 'express';
import { serviceProductCreate, serviceProductGet } from './products.service';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const result = await serviceProductCreate();
  console.log(result);
  console.log('product post request!');
};

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  const result = await serviceProductGet();
  console.log(result);
  console.log('product get request');
};
