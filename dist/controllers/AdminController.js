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
const ResponseUtils_1 = __importDefault(require("../components/utils/ResponseUtils"));
const AdminService_1 = __importDefault(require("../service/AdminService"));
const JwtUtils_1 = __importDefault(require("../components/JwtUtils"));
class AccountController {
    constructor() {
        this.validate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const credentials = req.body;
            try {
                const admin = yield this.service.validate(credentials);
                const token = this.getToken(admin);
                ResponseUtils_1.default.sendGenericSuccess(res, token);
            }
            catch (error) {
                ResponseUtils_1.default.sendInternalError(res, error.message, null);
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let admin = req.body;
            try {
                yield this.service.create(admin);
                ResponseUtils_1.default.sendCreate(res);
            }
            catch (error) {
                ResponseUtils_1.default.sendInternalError(res, error, 500);
            }
        });
        this.getToken = (admin) => {
            const adminData = {
                _id: admin._id,
                email: admin.email,
                lastName: admin.lastName,
                name: admin.name
            };
            return JwtUtils_1.default.createToken(adminData);
        };
        this.service = new AdminService_1.default();
    }
}
exports.default = AccountController;
