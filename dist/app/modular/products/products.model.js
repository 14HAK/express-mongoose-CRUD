"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
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
const ProductModel = (0, mongoose_1.model)('Product', ProductSchema);
exports.default = ProductModel;
