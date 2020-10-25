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
const Logger_1 = __importDefault(require("../components/Logger"));
const CryptoUtils_1 = __importDefault(require("../components/utils/CryptoUtils"));
const AdminDAO_1 = __importDefault(require("../dao/AdminDAO"));
class AdminService {
    constructor() {
        this.validate = (credentials) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.dao.getAdminByEmail(credentials.email);
            if (!response || response.length === 0)
                throw new Error(Constants_1.default.UNAUTHORIZED_ADMIN);
            const adminDB = JSON.parse(JSON.stringify(response[0]));
            if (!this.isPasswordValid(adminDB.password, credentials.password))
                throw new Error(Constants_1.default.UNAUTHORIZED_ADMIN);
            this.logger.info(Constants_1.default.AUTHORIZED_ADMIN);
            return adminDB;
        });
        this.create = (admin) => __awaiter(this, void 0, void 0, function* () {
            try {
                admin.password = CryptoUtils_1.default.encrypt(admin.password);
                return yield this.dao.create(admin);
            }
            catch (reason) {
                this.logger.error(Constants_1.default.ERROR_MESSAGE_CREATE_ADMIN + ' ' + reason);
                throw new Error(Constants_1.default.ERROR_MESSAGE_CREATE_ADMIN);
            }
        });
        this.isPasswordValid = (encryptPass, password) => {
            const decryptedPass = CryptoUtils_1.default.decrypt(encryptPass);
            this.logger.debug(`DBPass: ${decryptedPass}`);
            this.logger.debug(`Pass: ${password}`);
            return decryptedPass === password;
        };
        this.dao = new AdminDAO_1.default();
        this.logger = new Logger_1.default('AdminService');
    }
}
exports.default = AdminService;
