"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseBean {
    constructor() {
        this.getName = () => {
            return this.name;
        };
        this.setName = (name) => {
            this.name = name;
        };
        this.getLastName = () => {
            return this.lastName;
        };
        this.setLastName = (aLastName) => {
            this.lastName = aLastName;
        };
        this.lastName = "";
        this.name = "";
    }
}
exports.default = BaseBean;
