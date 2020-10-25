"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Interceptor_1 = __importDefault(require("./interceptor/Interceptor"));
const Router_1 = __importDefault(require("./routes/Router"));
let express = require('express');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let path = require('path');
let fs = require('fs');
class App {
    constructor() {
        this.middleware = () => {
            this.express.use(bodyParser.json({ limit: "50mb" }));
            this.express.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
            this.express.use(bodyParser.json({ type: 'application/vnd.api+json' }));
            this.express.use(methodOverride('X-HTTP-Method-Override'));
            this.express.use(bodyParser.urlencoded({ extended: false }));
        };
        this.routes = () => {
            this.express.use(this.interceptor.intercept);
            this.router.init(express);
            this.express.use('/api/flyDevs', this.router.getRoutes());
        };
        this.express = express();
        this.router = Router_1.default.getInstance();
        this.interceptor = Interceptor_1.default.getInstance();
        this.middleware();
        this.routes();
    }
}
exports.default = new App().express;
