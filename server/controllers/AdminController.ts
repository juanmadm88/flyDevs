import ResponseUtils from '../components/utils/ResponseUtils';
import AdminService from '../service/AdminService';
import JWTUtils from '../components/JwtUtils';

class AccountController {

    private service: AdminService;

    constructor() {
        this.service = new AdminService();
    }
    
    public validate = async (req: Request, res: Response): Promise<void> => {
        const credentials: any = req.body;

        try {
            const admin: any = await this.service.validate(credentials);
            const token: any = this.getToken(admin);
            ResponseUtils.sendGenericSuccess(res, token);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error.message, null);
        }
    }

    public create: Function = async (req: any, res: any): Promise<any> => {
        let admin: any = req.body;

        try {
            await this.service.create(admin);
            ResponseUtils.sendCreate(res);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error, 500);
        }
    }

    // Privates Functions
    private getToken = (admin: any): any => {
        const adminData: any = {
            _id: admin._id,
            email: admin.email,
            lastName: admin.lastName,
            name: admin.name
        }
        return JWTUtils.createToken(adminData);
    }
}

export default AccountController;
