"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mapper_1 = __importDefault(require("./Mapper"));
class AdminMapper extends Mapper_1.default {
    constructor() {
        super();
        this.getObjectId = (id) => {
            return this.objectId(id);
        };
        this.getEntitySchema = () => {
            return this.getSchema();
        };
        this.getEntityModel = () => {
            return this.getModel('Admin');
        };
        let model = {
            name: {
                type: String,
                unique: false,
                required: true
            },
            lastName: {
                type: String,
                unique: false,
                required: true
            },
            email: {
                type: String,
                unique: false,
                required: true
            },
            password: {
                type: String,
                unique: false,
                required: true
            }
        };
        this.createSchema(model, { autoIndex: false, timestamps: false, versionKey: false });
    }
}
exports.default = AdminMapper;
