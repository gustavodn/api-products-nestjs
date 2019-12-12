"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProductService = class ProductService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productModel.find();
            return products;
        });
    }
    getProduct(productID) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productModel.findById(productID);
            return product;
        });
    }
    createProduct(createProductDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = new this.productModel(createProductDTO);
            return newProduct.save();
        });
    }
    deleteProduct(productID) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProduct = yield this.productModel.findByIdAndDelete(productID);
            return deletedProduct;
        });
    }
    updateProduct(productID, createProductDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProduct = yield this.productModel
                .findByIdAndUpdate(productID, createProductDTO, { new: true });
            return updatedProduct;
        });
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Product')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map