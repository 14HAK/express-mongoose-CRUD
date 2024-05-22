import express, { Router } from 'express';
import { createOrder, getOrder } from './orders.controller';

const orderRouter: Router = express.Router();

orderRouter.route('/api/orders').post(createOrder).get(getOrder);

export default orderRouter;
