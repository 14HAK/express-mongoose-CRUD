import express, { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct
} from './products.controller';

const productRouter: Router = express.Router();

// The route /api/products/:id? defines a route where :id is an optional dynamic parameter. The ? makes the :id parameter optional.
productRouter
  .route('/api/products/:id?')
  .post(createProduct)
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default productRouter;
