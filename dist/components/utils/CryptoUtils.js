"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
const Constants_1 = __importDefault(require("../Constants"));
class CryptoUtils {
}
CryptoUtils.encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, Constants_1.default.ENCRIPTATION_KEY, { iv: Constants_1.default.INIT_VECTOR }).toString();
};
CryptoUtils.decrypt = (text) => {
    return CryptoJS.AES.decrypt(text, Constants_1.default.ENCRIPTATION_KEY, { iv: Constants_1.default.INIT_VECTOR }).toString(CryptoJS.enc.Utf8);
};
exports.default = CryptoUtils;
