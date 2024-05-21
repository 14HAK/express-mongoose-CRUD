import express, { Router } from 'express';
import { createProduct, getProduct } from './products.controller';

const productRouter: Router = express.Router();

productRouter.route('/api/products').post(createProduct).get(getProduct);

export default productRouter;
