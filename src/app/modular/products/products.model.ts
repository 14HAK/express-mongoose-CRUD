import { Schema, model } from 'mongoose';
import TPRODUCT from './products.interface';

const ProductSchema = new Schema<TPRODUCT>({
  name: {
    type: String,
    required: [true, 'product name missing!']
  },
  description: {
    type: String,
    required: [true, 'Product description missing!']
  },
  price: {
    type: Number,
    required: [true, 'product price missing!']
  },
  tags: [],
  variants: [
    {
      type: {
        type: String,
        required: [true, 'product type missing!']
      },
      value: {
        type: String,
        required: [true, 'product value missing!']
      }
    }
  ],
  inventory: {
    quantity: {
      type: Number,
      required: [true, 'product quantity missing!']
    },
    inStock: {
      type: Boolean,
      required: [true, 'product inStock missing!']
    }
  }
});

const ProductModel = model<TPRODUCT>('Product', ProductSchema);

export default ProductModel;
