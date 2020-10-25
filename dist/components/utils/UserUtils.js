"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __importDefault(require("./Utils"));
class UserUtils extends Utils_1.default {
    constructor() {
        super();
        this.getFilter = (params) => {
            let filter = {};
            if (params.id)
                filter.id = this.getCondition(params.id);
            if (params.name)
                filter.name = this.getCondition(params.name);
            if (params.lastName)
                filter.lastName = this.getCondition(params.lastName);
            if (params.age)
                filter.age = this.getCondition(params.age);
            return filter;
        };
    }
}
exports.default = UserUtils;
