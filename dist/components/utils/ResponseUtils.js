"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __importDefault(require("../Constants"));
class ResponseUtils {
}
ResponseUtils.sendCreate = (res) => {
    res.status(201);
    res.send();
};
ResponseUtils.sendEmpty = (res) => {
    res.status(204);
    res.send();
};
ResponseUtils.sendQuery = (res, data) => {
    let response = {};
    response.metadata = { total: data.length };
    response.data = data;
    res.status(200);
    res.send(response);
};
ResponseUtils.sendGenericSuccess = (res, data) => {
    res.status(200);
    res.send(data);
};
ResponseUtils.sendInvalidToken = (res, message, code) => {
    let response = {};
    response.type = Constants_1.default.UNAUTHORIZED_MESSAGE;
    response.message = message;
    response.code = code;
    res.status(401);
    res.send(response);
};
ResponseUtils.sendPermissionDenied = (res, message, code) => {
    let response = {};
    response.type = Constants_1.default.UNAUTHORIZED_MESSAGE;
    response.message = message;
    response.code = code;
    res.status(401);
    res.send(response);
};
ResponseUtils.sendForbiddenReq = (res, message, code) => {
    let response = {};
    response.type = Constants_1.default.FORBIDDEN_MESSAGE;
    response.message = message;
    response.code = code;
    res.status(403);
    res.send(response);
};
ResponseUtils.sendInvalidReq = (res, message, code) => {
    let response = {};
    response.type = Constants_1.default.BAD_REQUEST_MESSAGE;
    response.message = message;
    response.code = code;
    res.status(400);
    res.send(response);
};
ResponseUtils.sendNotFoundReq = (res, message, code) => {
    let response = {};
    response.type = Constants_1.default.NOT_FOUND_MESSAGE;
    response.message = message;
    response.code = code;
    res.status(404);
    res.send(response);
};
ResponseUtils.sendInternalError = (res, message, code) => {
    let response = {};
    response.type = Constants_1.default.INTERNAL_SERVER_ERROR_MESSAGE;
    response.message = message;
    response.code = code;
    res.status(500);
    res.send(response);
};
exports.default = ResponseUtils;
