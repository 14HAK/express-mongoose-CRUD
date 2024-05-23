"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_routes_1 = __importDefault(require("./app/modular/products/products.routes"));
const orders_routes_1 = __importDefault(require("./app/modular/orders/orders.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// middleware function to check all client request
app.use((req, res, next) => {
    console.log({ Path: req === null || req === void 0 ? void 0 : req.path, Method: req === null || req === void 0 ? void 0 : req.method });
    next();
});
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'welcome home!'
    });
});
// all route handler
app.use(products_routes_1.default);
app.use(orders_routes_1.default);
app.all('*', (req, res, next) => {
    next(res.status(400).json({
        status: 'fail',
        message: 'can not find this route'
    }));
});
exports.default = app;
