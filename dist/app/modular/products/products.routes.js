"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const productRouter = express_1.default.Router();
// The route /api/products/:id? defines a route where :id is an optional dynamic parameter. The ? makes the :id parameter optional.
productRouter
    .route('/api/products/:id?')
    .post(products_controller_1.createProduct)
    .get(products_controller_1.getProduct)
    .put(products_controller_1.updateProduct)
    .delete(products_controller_1.deleteProduct);
exports.default = productRouter;
