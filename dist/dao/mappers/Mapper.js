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
const ConnectionManager_1 = __importDefault(require("../../config/ConnectionManager"));
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
class Mapper {
    constructor() {
        this.getSchema = () => {
            return this.schema;
        };
        this.createSchema = (model, options) => {
            this.schema = new Schema(model, options);
            this.schema.index({ _id: 1 }, { sparse: true });
            return this.schema;
        };
        this.getMixedType = () => {
            return Schema.Types.Mixed;
        };
        this.objectId = (id) => {
            return new mongoose.Types.ObjectId(id);
        };
        this.getModel = (entity) => __awaiter(this, void 0, void 0, function* () {
            let connection = yield this.connectionManager.getConnection();
            return connection.model(entity, this.getSchema());
        });
        this.connectionManager = ConnectionManager_1.default.getInstance();
    }
}
exports.default = Mapper;
