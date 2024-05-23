import { Request, Response } from 'express';
import { isOrderValid, serviceOrderCreate, serviceOrderGet } from './orders.service';
import { TORDERS, ZodOrderSchema } from './orders.interface';
import { AnyObject } from 'mongoose';
import { makeSearchQuery } from '../../utils/querySearch';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  const reqOrder: TORDERS = await req?.body;
  const id: string = reqOrder?.productId;

  try {
    if (id) {
      const isDataExist = await isOrderValid(id);

      if (!isDataExist) {
        res.status(404).json({
          message: 'order id does not match product id.'
        });
      }
    }

    const validateData = await ZodOrderSchema.parseAsync(reqOrder);
    const result: AnyObject = await serviceOrderCreate(validateData);

    if (result) {
      res.status(201).json({
        success: true,
        message: 'Order created successfully!',
        data: result
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to create order.'
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      Error: err
    });
  }
};

export const getOrder = async (req: Request, res: Response): Promise<void> => {
  const paramsID: string = req?.params?.id;
  const query: AnyObject = req?.query;

  const searchQuery: AnyObject = await makeSearchQuery(paramsID, query);
  // console.log(searchQuery);
  try {
    const result: AnyObject = await serviceOrderGet(searchQuery);
    if (result) {
      res.status(201).json({
        success: true,
        message: 'order fetched successfully!',
        data: result
      });
    } else {
      res.status(201).json({
        success: false,
        message: 'fail to order fetch!',
        data: []
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      Error: err
    });
  }
};
