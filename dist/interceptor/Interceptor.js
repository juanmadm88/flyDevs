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
const Constants_1 = __importDefault(require("../components/Constants"));
const JwtUtils_1 = __importDefault(require("../components/JwtUtils"));
const Logger_1 = __importDefault(require("../components/Logger"));
const ResponseUtils_1 = __importDefault(require("../components/utils/ResponseUtils"));
let jwt = require('jsonwebtoken');
class Interceptor {
    constructor() {
        this.intercept = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            if (!this.isInterceptable(req)) {
                next();
                return;
            }
            if (!req.headers || !req.headers.authorization) {
                this.logger.error(Interceptor.UNEXISTING_TOKEN);
                ResponseUtils_1.default.sendForbiddenReq(res, Interceptor.UNEXISTING_TOKEN, 403);
                return;
            }
            let authorization = req.headers.authorization.toString();
            let tokenArray = authorization.split(' ');
            if (tokenArray.length !== 2) {
                this.logger.error(`${Interceptor.NOT_AUTHORIZED}: ${authorization}`);
                ResponseUtils_1.default.sendForbiddenReq(res, Interceptor.NOT_AUTHORIZED, 403);
                return;
            }
            if (tokenArray[0] !== Constants_1.default.BEARER_AUTHORIZATION_TYPE) {
                this.logger.error(`${Interceptor.INVALID_AUTHORIZATION_TYPE}: ${authorization}`);
                ResponseUtils_1.default.sendForbiddenReq(res, Interceptor.INVALID_AUTHORIZATION_TYPE, 403);
                return;
            }
            try {
                yield JwtUtils_1.default.verify(tokenArray[1]);
                next();
            }
            catch (error) {
                this.logger.error(`${Interceptor.INVALID_TOKEN}: ${error}`);
                ResponseUtils_1.default.sendInvalidToken(res, Interceptor.INVALID_TOKEN, 401);
            }
        });
        this.isInterceptable = (req) => {
            const interceptableURL = !req.originalUrl.includes(Constants_1.default.NOT_INTERCEPTABLE_URL);
            return interceptableURL;
        };
        this.logger = new Logger_1.default('Interceptor');
    }
}
Interceptor.UNEXISTING_TOKEN = "UNEXISTING TOKEN";
Interceptor.INVALID_TOKEN = "INVALID TOKEN";
Interceptor.NOT_AUTHORIZED = "NOT AUTHORIZED";
Interceptor.INVALID_AUTHORIZATION_TYPE = "INVALID AUTHORIZATION TYPE";
Interceptor.getInstance = () => {
    if (!Interceptor.instance) {
        Interceptor.instance = new Interceptor();
    }
    return Interceptor.instance;
};
exports.default = Interceptor;
