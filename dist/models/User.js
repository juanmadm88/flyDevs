"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseBean_1 = __importDefault(require("./BaseBean"));
class User extends BaseBean_1.default {
    constructor() {
        super();
        this.getAge = () => {
            return this.age;
        };
        this.setAge = (anAge) => {
            this.age = anAge;
        };
        this.age = 0;
    }
}
exports.default = User;
