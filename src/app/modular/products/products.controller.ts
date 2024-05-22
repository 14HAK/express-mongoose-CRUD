import { Request, Response } from 'express';
import {
  serviceProductCreate,
  serviceProductDelete,
  serviceProductGet,
  serviceProductUpdate
} from './products.service';
import { AnyObject, Types } from 'mongoose';
import { makeSearchQuery } from '../../utils/querySearch';
import { OBJECTID } from '../../utils/module.global.interface';

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
  // console.log(searchQuery);
  try {
    const result = await serviceProductGet(searchQuery);
    if (result) {
      res.status(201).json({
        success: true,
        message: 'Products fetched successfully!',
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

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const params: string = req?.params?.id;

  const filterID: OBJECTID = { _id: new Types.ObjectId(params) };
  const updatedData: AnyObject = await req?.body;

  try {
    const result = await serviceProductUpdate(filterID, updatedData);
    if (result) {
      res.status(201).json({
        success: true,
        message: 'Product updated successfully!',
        data: result
      });
    }
  } catch (err) {
    res.status(204).json({
      success: false,
      Error: err
    });
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const params: string = req?.params?.id;

  const filterID: OBJECTID = { _id: new Types.ObjectId(params) };

  try {
    const result = await serviceProductDelete(filterID);
    if (result) {
      res.status(204).json({
        success: true,
        message: 'Product deleted successfully!',
        data: result
      });
    }
  } catch (err) {
    res.status(204).json({
      success: false,
      Error: err
    });
  }
};
