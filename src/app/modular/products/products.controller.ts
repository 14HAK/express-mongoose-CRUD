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

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const ReqProduct = await req?.body;
    const result: AnyObject = await serviceProductCreate(ReqProduct);
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
    res.status(201).json({
      success: true,
      message: 'Product updated successfully!',
      data: result
    });
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
    }
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
