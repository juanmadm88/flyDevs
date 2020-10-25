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
const AdminMapper_1 = __importDefault(require("./mappers/AdminMapper"));
const Logger_1 = __importDefault(require("../components/Logger"));
const AdminUtils_1 = __importDefault(require("../dao/utils/AdminUtils"));
class AdminDAO {
    constructor() {
        this.getAdminByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                let query = { email: { $eq: email } };
                let adminModel = yield this.mapper.getEntityModel();
                return yield adminModel.find(query).exec();
            }
            catch (error) {
                this.logger.error(error);
                throw new Error(error);
            }
        });
        this.create = (admin) => __awaiter(this, void 0, void 0, function* () {
            let adminDB = this.utils.getModel(admin);
            try {
                let adminModel = yield this.mapper.getEntityModel();
                return yield adminModel.create(adminDB);
            }
            catch (error) {
                this.logger.error(error);
                throw new Error(error);
            }
        });
        this.logger = new Logger_1.default('AdminDAO');
        this.utils = new AdminUtils_1.default();
        this.mapper = new AdminMapper_1.default();
    }
}
exports.default = AdminDAO;
