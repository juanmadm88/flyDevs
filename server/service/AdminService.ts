import Constants from '../components/Constants';
import Logger from '../components/Logger';
import CryptoUtils from '../components/utils/CryptoUtils';
import AdminDAO from '../dao/AdminDAO';


class AdminService {

    private dao: AdminDAO;
    private logger: Logger;

    constructor() {
        this.dao = new AdminDAO();
        this.logger = new Logger('AdminService');
    }

    public validate = async (credentials: any): Promise<any> => {
        const response = await this.dao.getAdminByEmail(credentials.email);

        if(!response || response.length === 0) throw new Error(Constants.UNAUTHORIZED_ADMIN);
        const adminDB = JSON.parse(JSON.stringify(response[0]));
        if(!this.isPasswordValid(adminDB.password, credentials.password)) throw new Error(Constants.UNAUTHORIZED_ADMIN);
        this.logger.info(Constants.AUTHORIZED_ADMIN);

        return adminDB;
    }

    public create: Function = async (admin: any): Promise<any> => {
        try {
            admin.password = CryptoUtils.encrypt(admin.password);
            return await this.dao.create(admin);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_CREATE_ADMIN + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_CREATE_ADMIN);
        }
    }

    private isPasswordValid = (encryptPass: string,password: string): boolean => {
        const decryptedPass: string = CryptoUtils.decrypt(encryptPass);

        this.logger.debug(`DBPass: ${decryptedPass}`);
        this.logger.debug(`Pass: ${password}`);

        return decryptedPass === password;
    };
}

export default AdminService;
