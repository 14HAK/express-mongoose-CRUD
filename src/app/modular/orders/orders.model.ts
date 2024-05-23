import { Schema, model } from 'mongoose';
import { TORDERS } from './orders.interface';

const OrdersSchema = new Schema<TORDERS>({
  email: {
    type: String,
    required: [true, 'email is required!']
  },
  productId: {
    type: String,
    required: [true, 'product id is required!']
  },
  price: {
    type: Number,
    required: [true, 'Price is required!']
  },
  quantity: {
    type: Number,
    required: [true, 'quantity is required!']
  }
});

const OrderModel = model<TORDERS>('Order', OrdersSchema);

export default OrderModel;
