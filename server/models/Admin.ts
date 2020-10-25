import BaseBean from "./BaseBean";
import Base from './BaseBean';

class User  extends BaseBean{

    private email: string;
    private password: string;

    constructor() {
        super();
        this.email = "";
        this.password = "";
    }
    
    public getEmail: Function = (): string => {
        return this.email;
    }

    public setEmail: Function = (anEmail: string): void => {
        this.email = anEmail;
    }

    public getPassword: Function = (): string => {
        return this.password;
    }

    public setPassword: Function = (aPassword: string): void => {
        this.password = aPassword;
    }

}

export default User;
