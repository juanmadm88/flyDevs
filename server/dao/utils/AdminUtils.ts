import Utils from './Utils';
import Admin from '../../models/Admin';

class AdminUtils extends Utils {

    constructor() {
        super();
    }

    public getModel: Function = (admin: Admin): any => {
        return admin;
    }
}

export default AdminUtils;
