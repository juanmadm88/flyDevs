import Constants from '../components/Constants';
import ResponseUtils from '../components/utils/ResponseUtils';
import UserUtils from '../components/utils/UserUtils';
import UserService from '../service/UserService';

class UserController {

    private service: UserService;
    private utils: UserUtils;

    constructor() {
        this.service = new UserService();
        this.utils = new UserUtils();
    }

    public getUsers: Function = async (req: any, res: any): Promise<any> => {
        let filter: any = {};

        try {
            filter = this.utils.getFilter(req.query);
        } catch(error) {
            ResponseUtils.sendInvalidReq(res, error, 404);
        }
        
        try {
            let response: any = await this.service.getUsers(filter);
            let users = JSON.parse(JSON.stringify(response));
            ResponseUtils.sendQuery(res, users);
        } catch (reason) {
            ResponseUtils.sendInternalError(res, Constants.ERROR_MESSAGE_GET_USER, 500);
        }
    }

    public getUserById: Function = async (req: any, res: any): Promise<any> => {
        // Exists queryParams
        if (this.utils.exists(req.query)) {
            ResponseUtils.sendInvalidReq(res, Constants.NOT_SUPPORTED_URL, 400);
            return;
        }

        try {
            let user: any = await this.service.getUserById(req.params.id);
            ResponseUtils.sendQuery(res, user, null, null);
        } catch (reason) {
            ResponseUtils.sendInternalError(res, Constants.ERROR_MESSAGE_GET_USER, 500);
        }
    }

    public create: Function = async (req: any, res: any): Promise<any> => {
        let user: any = req.body;

        try {
            await this.service.create(user);
            ResponseUtils.sendCreate(res);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error, 500);
        }
    }

    public update: Function = async (req: any, res: any): Promise<any> => {
        if (!req.params.id) {
            ResponseUtils.sendInvalidReq(res, Constants.ERROR_NON_EXISTING_ID, 400);
            return;
        }

        let idUser: number = req.params.id;
        let user: any = req.body;

        try {
            await this.service.update(idUser, user);
            ResponseUtils.sendEmpty(res);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error, 500);
        }
    }

    public delete: Function = async (req: any, res: any): Promise<any> => {
        if (!req.params.id) {
            ResponseUtils.sendInvalidReq(res, Constants.ERROR_NON_EXISTING_ID, 400);
            return;
        }

        let idUser: number = req.params.id;
        try {
            await this.service.delete(idUser);
            ResponseUtils.sendEmpty(res);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error, 500);
        }
    }

}

export default UserController;
