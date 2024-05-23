import { OBJECTID } from '../../utils/module.global.interface';
import { Request, Response } from 'express';
import {
  serviceProductCreate,
  serviceProductDelete,
  serviceProductGet,
  serviceProductUpdate
} from './products.service';
import { AnyObject, Types } from 'mongoose';
import { makeSearchQuery } from '../../utils/querySearch';
import { ZodProductSchema } from './products.interface';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  const ReqProduct = await req?.body;
  try {
    const validZodData = await ZodProductSchema.parse(ReqProduct);
    const result: AnyObject = await serviceProductCreate(validZodData);
    if (result) {
      res.status(201).json({
        success: true,
        message: 'Product created successfully!',
        data: result
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to create product.'
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
  const paramsID: string = req?.params?.id;
  const query: AnyObject = req?.query;
  console.log(typeof query);

  const searchQuery: AnyObject = await makeSearchQuery(paramsID, query);
  // console.log(searchQuery);
  try {
    const result: AnyObject = await serviceProductGet(searchQuery);
    if (result) {
      res.status(201).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result
      });
    } else {
      res.status(201).json({
        success: false,
        message: 'fail to product fetch!',
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

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const params: string = req?.params?.id;

  const filterID: OBJECTID = { _id: new Types.ObjectId(params) };
  const updatedData: AnyObject = await req?.body;

  try {
    const validZodData = await ZodProductSchema.parse(updatedData);
    const result = await serviceProductUpdate(filterID, validZodData);
    if (result) {
      res.status(201).json({
        success: true,
        message: 'Product updated successfully!',
        data: result
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to update product.'
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

  try {
    const deletedItem = await serviceProductDelete(params);

    if (!deletedItem) {
      res.status(404).json({ success: false, message: 'Item not found' });
    } else {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
