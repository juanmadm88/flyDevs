import AdminMapper from './mappers/AdminMapper';
import Logger from '../components/Logger';
import AdminUtils from '../dao/utils/AdminUtils';

class AdminDAO {

    private mapper: AdminMapper;
    private logger: Logger;
    private utils: AdminUtils;

    constructor() {
        this.logger = new Logger('AdminDAO');
        this.utils = new AdminUtils();
        this.mapper = new AdminMapper();
    }

    public getAdminByEmail: Function = async (email: string): Promise<any> => {

        try {
            let query = {email:{$eq:email}};
            let adminModel = await this.mapper.getEntityModel();
            return await adminModel.find(query).exec();
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }

    public create: Function = async (admin: any): Promise<any> => {
        let adminDB: any = this.utils.getModel(admin);

        try {
            let adminModel = await this.mapper.getEntityModel();
            return await adminModel.create(adminDB);
        } catch(error) {
            this.logger.error(error);
            throw new Error(error);
        }
    }
}

export default AdminDAO;
