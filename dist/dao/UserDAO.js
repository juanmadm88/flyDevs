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
const UserMapper_1 = __importDefault(require("./mappers/UserMapper"));
const UserUtils_1 = __importDefault(require("./utils/UserUtils"));
const Logger_1 = __importDefault(require("../components/Logger"));
class UserDAO {
    constructor() {
        this.getUsers = (filter) => __awaiter(this, void 0, void 0, function* () {
            let options = this.utils.getOptions(filter);
            try {
                let userModel = yield this.mapper.getEntityModel();
                return yield userModel.find(options).exec();
            }
            catch (error) {
                this.logger.error(error);
                throw new Error(error);
            }
        });
        this.getUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userModel = yield this.mapper.getEntityModel();
                return yield userModel.findById(id).exec();
            }
            catch (error) {
                this.logger.error(error);
                throw new Error(error);
            }
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            let userDB = this.utils.getModel(user);
            try {
                let userModel = yield this.mapper.getEntityModel();
                return yield userModel.create(userDB);
            }
            catch (error) {
                this.logger.error(error);
                throw new Error(error);
            }
        });
        this.update = (id, user) => __awaiter(this, void 0, void 0, function* () {
            let userDB = this.utils.getModel(user);
            let objectID = this.mapper.getObjectId(id);
            try {
                let userModel = yield this.mapper.getEntityModel();
                return yield userModel.updateOne({ _id: objectID }, userDB);
            }
            catch (error) {
                this.logger.error(error);
                throw new Error(error);
            }
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            let objectID = this.mapper.getObjectId(id);
            try {
                let userModel = yield this.mapper.getEntityModel();
                let response = yield userModel.deleteOne({ _id: objectID }).exec();
            }
            catch (error) {
                this.logger.error(error);
                throw new Error(error);
            }
        });
        this.logger = new Logger_1.default('UserDAO');
        this.utils = new UserUtils_1.default();
        this.mapper = new UserMapper_1.default();
    }
}
exports.default = UserDAO;
