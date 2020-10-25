import UserController from '../controllers/UserController';
import AdminController from '../controllers/AdminController';

class Router {

    private static instance: Router;
    private routes: any;
    private userController: UserController;
    private adminController: AdminController;

    private constructor() {
        this.userController = new UserController();
        this.adminController = new AdminController();
    }

    public static getInstance: Function = (): Router => {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }

    public init: Function = (express: any): void => {
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
    }

    public getRoutes: Function = (): any => {
        return this.routes;
    }

}

export default Router;
