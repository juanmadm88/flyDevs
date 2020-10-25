"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __importDefault(require("./Utils"));
class AdminUtils extends Utils_1.default {
    constructor() {
        super();
        this.getModel = (admin) => {
            return admin;
        };
    }
}
exports.default = AdminUtils;
