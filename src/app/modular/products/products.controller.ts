import { Request, Response } from 'express';
import {
  makeSearchQuery,
  serviceProductCreate,
  serviceProductGet
} from './products.service';
import { AnyObject } from 'mongoose';

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
  const paramsID: undefined | string = req?.params?.id;
  const query: AnyObject = req?.query;

  const searchQuery = await makeSearchQuery(paramsID, query);
  console.log(searchQuery);

  try {
    const result = await serviceProductGet(searchQuery);
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
