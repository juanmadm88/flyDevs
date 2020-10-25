"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __importDefault(require("../Constants"));
class Utils {
    constructor() {
        this.exists = (anObject) => {
            return anObject && Object.keys(anObject).length > 0;
        };
        this.getCondition = (param) => {
            let splitParam = param.split(':');
            if (splitParam.length === 1) {
                return this.buildCondition(Constants_1.default.EQ_OPERATOR, splitParam[0]);
            }
            return this.buildCondition(splitParam[0], splitParam[1]);
        };
        this.buildCondition = (criteria, values) => {
            let aCondition = {};
            aCondition.criteria = criteria;
            aCondition.values = this.splitValues(values);
            return aCondition;
        };
        this.splitValues = (values) => {
            let splitParams = values.split(',');
            for (let i = 0; i < splitParams.length; i++) {
                if (!isNaN(splitParams[i])) {
                    splitParams[i] = parseInt(splitParams[i], 10);
                }
            }
            return splitParams;
        };
    }
}
exports.default = Utils;
