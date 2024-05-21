import { Request, Response } from 'express';
import { serviceProductCreate, servicesProductGet } from './products.service';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const result = await serviceProductCreate();
  console.log(result);
  console.log('product post request!');
};

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  const result = await servicesProductGet();
  console.log(result);
  console.log('product get request');
};
