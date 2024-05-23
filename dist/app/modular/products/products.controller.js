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
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.createProduct = void 0;
const products_service_1 = require("./products.service");
const mongoose_1 = require("mongoose");
const querySearch_1 = require("../../utils/querySearch");
const products_interface_1 = require("./products.interface");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ReqProduct = yield (req === null || req === void 0 ? void 0 : req.body);
    try {
        const validZodData = yield products_interface_1.ZodProductSchema.parse(ReqProduct);
        const result = yield (0, products_service_1.serviceProductCreate)(validZodData);
        if (result) {
            res.status(201).json({
                success: true,
                message: 'Product created successfully!',
                data: result
            });
        }
        else {
            res.status(500).json({
                success: false,
                error: 'Failed to create product.'
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
exports.createProduct = createProduct;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const paramsID = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    const query = req === null || req === void 0 ? void 0 : req.query;
    console.log(typeof query);
    const searchQuery = yield (0, querySearch_1.makeSearchQuery)(paramsID, query);
    // console.log(searchQuery);
    try {
        const result = yield (0, products_service_1.serviceProductGet)(searchQuery);
        if (result) {
            res.status(201).json({
                success: true,
                message: 'Products fetched successfully!',
                data: result
            });
        }
        else {
            res.status(201).json({
                success: false,
                message: 'fail to product fetch!',
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
exports.getProduct = getProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const params = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    const filterID = { _id: new mongoose_1.Types.ObjectId(params) };
    const updatedData = yield (req === null || req === void 0 ? void 0 : req.body);
    try {
        const validZodData = yield products_interface_1.ZodProductSchema.parse(updatedData);
        const result = yield (0, products_service_1.serviceProductUpdate)(filterID, validZodData);
        if (result) {
            res.status(201).json({
                success: true,
                message: 'Product updated successfully!',
                data: result
            });
        }
        else {
            res.status(500).json({
                success: false,
                error: 'Failed to update product.'
            });
        }
    }
    catch (err) {
        res.status(204).json({
            success: false,
            Error: err
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const params = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
    try {
        const deletedItem = yield (0, products_service_1.serviceProductDelete)(params);
        if (!deletedItem) {
            res.status(404).json({ success: false, message: 'Item not found' });
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Product deleted successfully!',
                data: null
            });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});
exports.deleteProduct = deleteProduct;
