import { AnyObject, Types } from 'mongoose';
import TPRODUCT from './products.interface';
import ProductModel from './products.model';

export const serviceProductCreate = async (ReqProduct: TPRODUCT): Promise<AnyObject> => {
  const result = await ProductModel.create(ReqProduct);
  return result;
};

export const serviceProductGet = async (query: AnyObject): Promise<AnyObject> => {
  // console.log(property);
  const result = await ProductModel.find(query);
  return result;
};

export const makeSearchQuery = async (
  paramsID: undefined | string,
  query: AnyObject
): Promise<AnyObject> => {
  let searchQuery: AnyObject = {};

  if (!paramsID && query.length < 1) {
    searchQuery = {};
  } else if (!paramsID || query.length >= 1) {
    searchQuery = { ...query };
  } else if (paramsID || query.length >= 1) {
    searchQuery = { _id: new Types.ObjectId(paramsID), ...query };
  }

  return searchQuery;
};
