import express, { Router } from 'express';
import { createOrder, getOrder } from './orders.controller';

const orderRouter: Router = express.Router();

orderRouter.route('/api/orders/:id?').post(createOrder).get(getOrder);

export default orderRouter;
