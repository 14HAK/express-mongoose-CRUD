"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.createOrder = void 0;
const orders_service_1 = require("./orders.service");
const orders_interface_1 = require("./orders.interface");
const querySearch_1 = require("../../utils/querySearch");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqOrder = yield (req === null || req === void 0 ? void 0 : req.body);
    const id = reqOrder === null || reqOrder === void 0 ? void 0 : reqOrder.productId;
    try {
        if (id) {
            const isDataExist = yield (0, orders_service_1.isOrderValid)(id);
            if (!isDataExist) {
                res.status(404).json({
                    message: 'order id does not match product id.'
                });
            }
        }
        const validateData = yield orders_interface_1.ZodOrderSchema.parseAsync(reqOrder);
        const result = yield (0, orders_service_1.serviceOrderCreate)(validateData);
        if (result) {
            res.status(201).json({
                success: true,
                message: 'Order created successfully!',
                data: result
            });
        }
        else {
            res.status(500).json({
                success: false,
                error: 'Failed to create order.'
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            Error: err
        });
    }
});
exports.createOrder = createOrder;
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const paramsID = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    const query = req === null || req === void 0 ? void 0 : req.query;
    const searchQuery = yield (0, querySearch_1.makeSearchQuery)(paramsID, query);
    // console.log(searchQuery);
    try {
        const result = yield (0, orders_service_1.serviceOrderGet)(searchQuery);
        if (result) {
            res.status(201).json({
                success: true,
                message: 'order fetched successfully!',
                data: result
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: 'fail to order fetch!',
                data: []
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            Error: err
        });
    }
});
exports.getOrder = getOrder;
