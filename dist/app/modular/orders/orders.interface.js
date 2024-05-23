"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodOrderSchema = void 0;
const zod_1 = require("zod");
exports.ZodOrderSchema = zod_1.z.object({
    email: zod_1.z.string(),
    productId: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number()
});
