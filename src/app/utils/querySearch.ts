import { AnyObject, Types } from 'mongoose';

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
