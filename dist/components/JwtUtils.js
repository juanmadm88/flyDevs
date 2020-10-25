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
let jwt = require('jsonwebtoken');
const Constants_1 = __importDefault(require("../components/Constants"));
class JwtUtils {
    constructor() {
        this.createToken = (data) => {
            const expiresIn = parseInt(Constants_1.default.TOKEN_EXPIRATION);
            const dataStoredInToken = {
                _id: Math.random,
                admin: data
            };
            return {
                token: jwt.sign(dataStoredInToken, Constants_1.default.JWT_SECRET, { expiresIn })
            };
        };
        this.verify = (token) => __awaiter(this, void 0, void 0, function* () {
            const secret = Constants_1.default.JWT_SECRET;
            let payload = {};
            try {
                payload = yield jwt.verify(token, secret);
            }
            catch (_a) {
                throw new Error();
            }
            return payload;
        });
    }
}
exports.default = new JwtUtils();
