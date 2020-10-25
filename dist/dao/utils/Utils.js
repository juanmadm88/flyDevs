"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    constructor() {
        this.exists = (anObject) => {
            return anObject && Object.keys(anObject).length > 0;
        };
        this.isEmpty = (anArray) => {
            return !anArray || anArray.length === 0;
        };
    }
}
exports.default = Utils;
