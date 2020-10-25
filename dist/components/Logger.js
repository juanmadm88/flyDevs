"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerHelper_1 = __importDefault(require("./helpers/LoggerHelper"));
class Logger {
    constructor(aClass) {
        this.silly = (aMessage) => {
            this.logger.silly(aMessage);
        };
        this.debug = (aMessage) => {
            this.logger.debug(aMessage);
        };
        this.verbose = (aMessage) => {
            this.logger.verbose(aMessage);
        };
        this.info = (aMessage) => {
            this.logger.info(aMessage);
        };
        this.warn = (aMessage) => {
            this.logger.warn(aMessage);
        };
        this.error = (aMessage) => {
            this.logger.error(aMessage);
        };
        this.logger = LoggerHelper_1.default.getInstance().getLogger(aClass);
    }
}
exports.default = Logger;
