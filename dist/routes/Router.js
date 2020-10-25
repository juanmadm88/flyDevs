"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../controllers/UserController"));
const AdminController_1 = __importDefault(require("../controllers/AdminController"));
class Router {
    constructor() {
        this.init = (express) => {
            this.routes = express.Router();
            this.routes.route('/admins/auth/session')
                .post(this.adminController.validate);
            this.routes.route('/admins')
                .post(this.adminController.create);
            this.routes.route('/users')
                .get(this.userController.getUsers)
                .post(this.userController.create);
            this.routes.route('/users/:id')
                .get(this.userController.getUserById)
                .put(this.userController.update)
                .delete(this.userController.delete);
        };
        this.getRoutes = () => {
            return this.routes;
        };
        this.userController = new UserController_1.default();
        this.adminController = new AdminController_1.default();
    }
}
Router.getInstance = () => {
    if (!Router.instance) {
        Router.instance = new Router();
    }
    return Router.instance;
};
exports.default = Router;
