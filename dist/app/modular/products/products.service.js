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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceProductDelete = exports.serviceProductUpdate = exports.serviceProductGet = exports.serviceProductCreate = void 0;
const products_model_1 = __importDefault(require("./products.model"));
const serviceProductCreate = (ReqProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.create(ReqProduct);
    return result;
});
exports.serviceProductCreate = serviceProductCreate;
const serviceProductGet = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(property);
    const result = yield products_model_1.default.find(query);
    return result;
});
exports.serviceProductGet = serviceProductGet;
const serviceProductUpdate = (filter, update) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.default.findByIdAndUpdate(filter, update, { new: true });
    console.log(result);
    if (result) {
        return result;
    }
});
exports.serviceProductUpdate = serviceProductUpdate;
const serviceProductDelete = (conditions) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedItem = yield products_model_1.default.findByIdAndDelete(conditions);
    console.log(deletedItem);
    return yield deletedItem;
});
exports.serviceProductDelete = serviceProductDelete;
