import TPRODUCT from './products.interface';
import ProductModel from './products.model';

import { AnyObject } from 'mongoose';

export const serviceProductCreate = async (ReqProduct: TPRODUCT): Promise<AnyObject> => {
  const result = await ProductModel.create(ReqProduct);
  return result;
};

export const serviceProductGet = async (): Promise<AnyObject> => {};
