"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WINSTON = require('winston');
const FORMAT = WINSTON.format;
class LoggerHelper {
    constructor() {
        this.getLogger = (aClass) => {
            let customLabel = this.getLabel(aClass);
            let customFormat = this.getFormat();
            let customTime = this.getTime();
            let options = {
                format: FORMAT.combine(customLabel, customTime, customFormat),
                transports: [
                    new WINSTON.transports.Console()
                ],
            };
            return WINSTON.createLogger(options);
        };
        this.getLabel = (aLabel) => {
            return FORMAT.label({ label: aLabel });
        };
        this.getFormat = () => {
            return FORMAT.printf((info, opts) => {
                return `${info.timestamp} [${info.level}] - ${info.label}: ${info.message}`;
            });
        };
        this.getTime = () => {
            let aFormatDate = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });
            return FORMAT.timestamp({ format: aFormatDate });
        };
    }
}
LoggerHelper.getInstance = () => {
    if (!LoggerHelper.instance) {
        LoggerHelper.instance = new LoggerHelper();
    }
    return LoggerHelper.instance;
};
exports.default = LoggerHelper;
