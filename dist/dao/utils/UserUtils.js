"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = __importDefault(require("./Utils"));
const Constants_1 = __importDefault(require("../../components/Constants"));
class UserUtils extends Utils_1.default {
    constructor() {
        super();
        this.fieldsToFilter = ['id', 'name', 'lastName', 'age'];
        this.getModel = (user) => {
            return user;
        };
        this.getOptions = (filter) => {
            let options = {};
            let conditions = {};
            if (filter.id)
                this.getCondition(conditions, filter.id, this.fieldsToFilter[0]);
            if (filter.name)
                this.getCondition(conditions, filter.name, this.fieldsToFilter[1]);
            if (filter.lastName)
                this.getCondition(conditions, filter.lastName, this.fieldsToFilter[2]);
            if (filter.age)
                this.getCondition(conditions, filter.age, this.fieldsToFilter[3]);
            if (this.exists(conditions)) {
                options = conditions;
            }
            return options;
        };
        this.getCondition = (filter, condition, fieldToFilter) => {
            return this.buildCondition(filter, condition.criteria, condition.values, fieldToFilter);
        };
        this.buildCondition = (filter, operator, values, fieldToFilter) => {
            let aCondition = {};
            switch (operator) {
                case Constants_1.default.OR_OPERATOR:
                    filter[Constants_1.default.OR_OPERATOR_DB] ? filter[Constants_1.default.OR_OPERATOR_DB] = filter[Constants_1.default.OR_OPERATOR_DB] : filter[Constants_1.default.OR_OPERATOR_DB] = [];
                    this.buildExpressions(filter[Constants_1.default.OR_OPERATOR_DB], values, fieldToFilter);
                    break;
                case Constants_1.default.EQ_OPERATOR:
                    aCondition[Constants_1.default.EQ_OPERATOR_DB] = values[0];
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.NE_OPERATOR:
                    aCondition[Constants_1.default.NE_OPERATOR_DB] = values[0];
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.LT_OPERATOR:
                    aCondition[Constants_1.default.LT_OPERATOR_DB] = values[0];
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.SIZE_OPERATOR:
                    aCondition[Constants_1.default.SIZE_OPERATOR_DB] = values[0];
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.LTE_OPERATOR:
                    aCondition[Constants_1.default.LTE_OPERATOR_DB] = values[0];
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.GT_OPERATOR:
                    aCondition[Constants_1.default.GT_OPERATOR_DB] = values[0];
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.GTE_OPERATOR:
                    aCondition[Constants_1.default.GTE_OPERATOR_DB] = values[0];
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.IN_OPERATOR:
                    aCondition[Constants_1.default.IN_OPERATOR_DB] = values;
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.NOTIN_OPERATOR:
                    aCondition[Constants_1.default.NOTIN_OPERATOR_DB] = values;
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.LIKE_OPERATOR:
                    aCondition[Constants_1.default.REGEX_OPERATOR_DB] = '.*' + values[0] + '.*';
                    filter[fieldToFilter] = aCondition;
                    break;
                case Constants_1.default.NOTLIKE_OPERATOR:
                    aCondition[Constants_1.default.NOT_OPERATOR_DB] = '.*' + values[0] + '.*';
                    filter[fieldToFilter] = aCondition;
                    break;
                default:
                    aCondition[Constants_1.default.EQ_OPERATOR_DB] = values[0];
                    filter[fieldToFilter] = aCondition;
                    break;
            }
            return aCondition;
        };
        this.buildExpressions = (filter, values, field) => {
            for (let value of values) {
                let expression = {};
                expression[field] = value;
                filter.push(expression);
            }
        };
    }
}
exports.default = UserUtils;
