import { AnyObject } from 'mongoose';
import TPRODUCT from './products.interface';
import ProductModel from './products.model';
import { OBJECTID } from '../../utils/module.global.interface';


export const serviceProductCreate = async (ReqProduct: TPRODUCT): Promise<AnyObject> => {
  const result: AnyObject = await ProductModel.create(ReqProduct);
  return result;
};

export const serviceProductGet = async (query: AnyObject): Promise<AnyObject> => {
  // console.log(property);
  const result: AnyObject = await ProductModel.find(query);
  return result;
};

export const serviceProductUpdate = async (
  filter: OBJECTID,
  update: AnyObject
): Promise<AnyObject | unknown> => {
  const result: AnyObject | unknown = await ProductModel.findByIdAndUpdate(
    filter,
    update,
    { new: true }
  );
  if (result) {
    return result;
  }
};

export const serviceProductDelete = async (
  conditions: string
): Promise<AnyObject | null> => {
  const deletedItem: AnyObject | null = await ProductModel.findByIdAndDelete(conditions);
  console.log(deletedItem);
  return await deletedItem;
};
