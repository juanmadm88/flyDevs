import UserMapper from './mappers/UserMapper';
import UserUtils from './utils/UserUtils';

import Logger from '../components/Logger';


class UserDAO {

    private mapper: UserMapper;
    private utils: UserUtils;
    private logger: Logger;

    constructor() {
        this.logger = new Logger('UserDAO');

        this.utils = new UserUtils();
        this.mapper = new UserMapper();
    }

    public getUsers: Function = async (filter: any): Promise<any> => {
        let options: any = this.utils.getOptions(filter);

        try {

            let userModel = await this.mapper.getEntityModel();
            return await userModel.find(options).exec();
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

    public getUserById: Function = async (id: number): Promise<any> => {
        try {
            let userModel = await this.mapper.getEntityModel();
            return await userModel.findById(id).exec();
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

    public create: Function = async (user: any): Promise<any> => {
        let userDB: any = this.utils.getModel(user);

        try {
            let userModel = await this.mapper.getEntityModel();
            return await userModel.create(userDB);
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

    public update: Function = async (id: number, user: any): Promise<any> => {
        let userDB: any = this.utils.getModel(user);
        let objectID: any = this.mapper.getObjectId(id);

        try {
            let userModel = await this.mapper.getEntityModel();
            return await userModel.updateOne({_id: objectID}, userDB);
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

    public delete: Function = async (id: number): Promise<any> => {
        let objectID: any = this.mapper.getObjectId(id);
        try {
            let userModel = await this.mapper.getEntityModel();
            let response = await userModel.deleteOne({_id: objectID}).exec();
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

}

export default UserDAO;
