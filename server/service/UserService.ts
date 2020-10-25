import Constants from '../components/Constants';
import Logger from '../components/Logger';
import UserDAO from '../dao/UserDAO';

class UserService {

    private dao: UserDAO;
    private logger: Logger;

    constructor() {
        this.dao = new UserDAO();
        this.logger = new Logger('UserService');
    }

    public getUsers: Function = async (filter: any): Promise<any> => {
        try {
            return await this.dao.getUsers(filter);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_GET_USER + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_GET_USER);
        }
    }

    public getUserById: Function = async (id: number): Promise<any> => {
        try {
            return await this.dao.getUserById(id);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_GET_USER_BY_ID + ' ' + id + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_GET_USER_BY_ID);
        }
    }

    public create: Function = async (user: any): Promise<any> => {
        try {
            return await this.dao.create(user);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_CREATE_USER + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_CREATE_USER);
        }
    }

    public update: Function = async (id: number, user: any): Promise<any> => {
        try {
            return await this.dao.update(id, user);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_UPDATE_USER + id + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_UPDATE_USER);
        }
    }

    public delete: Function = async (id: number): Promise<any> => {
        try {
            return await this.dao.delete(id);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_DELETE_USER + id + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_DELETE_USER);
        }
    }

}

export default UserService;
