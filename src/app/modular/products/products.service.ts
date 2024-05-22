import { AnyObject } from 'mongoose';
import TPRODUCT from './products.interface';
import ProductModel from './products.model';
import { OBJECTID } from '../../utils/module.global.interface';

export const serviceProductCreate = async (ReqProduct: TPRODUCT): Promise<AnyObject> => {
  const result = await ProductModel.create(ReqProduct);
  return result;
};

export const serviceProductGet = async (query: AnyObject): Promise<AnyObject> => {
  // console.log(property);
  const result = await ProductModel.find(query);
  return result;
};

export const serviceProductUpdate = async (
  filter: OBJECTID,
  update: AnyObject
): Promise<AnyObject | undefined> => {
  const result = await ProductModel.findByIdAndUpdate(filter, update, { new: true });
  if (result) {
    return result;
  }
};

export const serviceProductDelete = async (
  conditions: OBJECTID
): Promise<AnyObject | undefined> => {
  const result = await ProductModel.findOneAndDelete(conditions);
  if (result) {
    return result;
  }
};
