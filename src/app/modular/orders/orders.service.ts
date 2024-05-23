import { AnyObject } from 'mongoose';
import { TORDERS } from './orders.interface';
import OrderModel from './orders.model';

export const serviceOrderCreate = async (ReqProduct: TORDERS): Promise<AnyObject> => {
  const result: AnyObject = await OrderModel.create(ReqProduct);
  return result;
};

export const serviceOrderGet = async (query: AnyObject): Promise<AnyObject> => {
  // console.log(property);
  const result: AnyObject = await OrderModel.find(query);
  return result;
};
