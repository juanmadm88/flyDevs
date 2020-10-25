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
let mongoose = require('mongoose');
const dbOptions = {
    user: process.env.user,
    pass: process.env.password,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
};
class ConnectionManager {
    constructor() {
        this.getConnection = () => {
            return this.connection;
        };
        this.connectionStatus = () => {
            let status = {};
            try {
                status = ConnectionManager.buildStatus(mongoose.connection.readyState);
            }
            catch (error) {
                status.description = JSON.stringify(error);
                this.logger.error(JSON.stringify(error));
            }
            return status;
        };
        this.logger = new Logger_1.default('ConnectionManager');
        let urlDB = 'mongodb://' + process.env.host + ':' + process.env.port + '/' + process.env.database;
        this.connection = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                resolve(yield mongoose.connect(urlDB, dbOptions));
                this.logger.info(Constants_1.default.SUCCESSFUL_CONNECTION);
            }
            catch (error) {
                this.logger.error(Constants_1.default.ERROR_CONNECTION + JSON.stringify(error));
            }
        }));
    }
}
ConnectionManager.getInstance = () => {
    if (!ConnectionManager.instance) {
        ConnectionManager.instance = new ConnectionManager();
    }
    return ConnectionManager.instance;
};
ConnectionManager.buildStatus = (statusCode) => {
    let status = {};
    status.code = statusCode;
    switch (statusCode) {
        case 0:
            status.description = Constants_1.default.DISCONNECTED;
            break;
        case 1:
            status.description = Constants_1.default.CONNECTED;
            break;
        case 2:
            status.description = Constants_1.default.CONNECTING;
            break;
        case 3:
            status.description = Constants_1.default.DISCONNECTING;
            break;
        default:
            status.description = Constants_1.default.UNKNOW;
    }
    return status;
};
exports.default = ConnectionManager;
