import Mapper from './Mapper';

class UserMapper extends Mapper {

    constructor() {
        super();
        let model: any = {
            name: {
                type: String,
                unique: false,
                required: true
            },
            lastName: {
                type: String,
                unique: false,
                required: true
            },
            age: {
                type: Number,
                unique: false,
                required: true
            }
        };
        this.createSchema(model, {autoIndex: false, timestamps: false, versionKey: false});
    }

    public getObjectId: Function = (id: any): any => {
        return this.objectId(id);
    }

    public getEntitySchema: Function = (): any => {
        return this.getSchema();
    }

    public getEntityModel: Function = (): Promise<any> => {
        return this.getModel('User');
    }

}

export default UserMapper;
