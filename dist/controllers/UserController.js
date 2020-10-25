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
const ResponseUtils_1 = __importDefault(require("../components/utils/ResponseUtils"));
const UserUtils_1 = __importDefault(require("../components/utils/UserUtils"));
const UserService_1 = __importDefault(require("../service/UserService"));
class UserController {
    constructor() {
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let filter = {};
            try {
                filter = this.utils.getFilter(req.query);
            }
            catch (error) {
                ResponseUtils_1.default.sendInvalidReq(res, error, 404);
            }
            try {
                let response = yield this.service.getUsers(filter);
                let users = JSON.parse(JSON.stringify(response));
                ResponseUtils_1.default.sendQuery(res, users);
            }
            catch (reason) {
                ResponseUtils_1.default.sendInternalError(res, Constants_1.default.ERROR_MESSAGE_GET_USER, 500);
            }
        });
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (this.utils.exists(req.query)) {
                ResponseUtils_1.default.sendInvalidReq(res, Constants_1.default.NOT_SUPPORTED_URL, 400);
                return;
            }
            try {
                let user = yield this.service.getUserById(req.params.id);
                ResponseUtils_1.default.sendQuery(res, user, null, null);
            }
            catch (reason) {
                ResponseUtils_1.default.sendInternalError(res, Constants_1.default.ERROR_MESSAGE_GET_USER, 500);
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            try {
                yield this.service.create(user);
                ResponseUtils_1.default.sendCreate(res);
            }
            catch (error) {
                ResponseUtils_1.default.sendInternalError(res, error, 500);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                ResponseUtils_1.default.sendInvalidReq(res, Constants_1.default.ERROR_NON_EXISTING_ID, 400);
                return;
            }
            let idUser = req.params.id;
            let user = req.body;
            try {
                yield this.service.update(idUser, user);
                ResponseUtils_1.default.sendEmpty(res);
            }
            catch (error) {
                ResponseUtils_1.default.sendInternalError(res, error, 500);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.params.id) {
                ResponseUtils_1.default.sendInvalidReq(res, Constants_1.default.ERROR_NON_EXISTING_ID, 400);
                return;
            }
            let idUser = req.params.id;
            try {
                yield this.service.delete(idUser);
                ResponseUtils_1.default.sendEmpty(res);
            }
            catch (error) {
                ResponseUtils_1.default.sendInternalError(res, error, 500);
            }
        });
        this.service = new UserService_1.default();
        this.utils = new UserUtils_1.default();
    }
}
exports.default = UserController;
