"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseBean_1 = __importDefault(require("./BaseBean"));
class User extends BaseBean_1.default {
    constructor() {
        super();
        this.getEmail = () => {
            return this.email;
        };
        this.setEmail = (anEmail) => {
            this.email = anEmail;
        };
        this.getPassword = () => {
            return this.password;
        };
        this.setPassword = (aPassword) => {
            this.password = aPassword;
        };
        this.email = "";
        this.password = "";
    }
}
exports.default = User;
