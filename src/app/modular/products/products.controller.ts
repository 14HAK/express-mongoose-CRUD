import { Request, Response } from 'express';
import { serviceProductCreate, serviceProductGet } from './products.service';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const ReqProduct = await req?.body;
    const result = await serviceProductCreate(ReqProduct);
    if (result) {
      res.status(201).json({
        success: true,
        message: 'Product created successfully!',
        data: result
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      Error: err
    });
  }
};

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  const result = await serviceProductGet();
  console.log(result);
  console.log('product get request');
};
