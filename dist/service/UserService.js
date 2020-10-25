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
const UserDAO_1 = __importDefault(require("../dao/UserDAO"));
class UserService {
    constructor() {
        this.getUsers = (filter) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dao.getUsers(filter);
            }
            catch (reason) {
                this.logger.error(Constants_1.default.ERROR_MESSAGE_GET_USER + ' ' + reason);
                throw new Error(Constants_1.default.ERROR_MESSAGE_GET_USER);
            }
        });
        this.getUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dao.getUserById(id);
            }
            catch (reason) {
                this.logger.error(Constants_1.default.ERROR_MESSAGE_GET_USER_BY_ID + ' ' + id + ' ' + reason);
                throw new Error(Constants_1.default.ERROR_MESSAGE_GET_USER_BY_ID);
            }
        });
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dao.create(user);
            }
            catch (reason) {
                this.logger.error(Constants_1.default.ERROR_MESSAGE_CREATE_USER + ' ' + reason);
                throw new Error(Constants_1.default.ERROR_MESSAGE_CREATE_USER);
            }
        });
        this.update = (id, user) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dao.update(id, user);
            }
            catch (reason) {
                this.logger.error(Constants_1.default.ERROR_MESSAGE_UPDATE_USER + id + ' ' + reason);
                throw new Error(Constants_1.default.ERROR_MESSAGE_UPDATE_USER);
            }
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.dao.delete(id);
            }
            catch (reason) {
                this.logger.error(Constants_1.default.ERROR_MESSAGE_DELETE_USER + id + ' ' + reason);
                throw new Error(Constants_1.default.ERROR_MESSAGE_DELETE_USER);
            }
        });
        this.dao = new UserDAO_1.default();
        this.logger = new Logger_1.default('UserService');
    }
}
exports.default = UserService;
