"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("./orders.controller");
const orderRouter = express_1.default.Router();
orderRouter.route('/api/orders/:id?').post(orders_controller_1.createOrder).get(orders_controller_1.getOrder);
exports.default = orderRouter;
