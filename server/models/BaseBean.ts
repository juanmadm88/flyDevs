abstract class BaseBean {

    private name: string;
    private lastName: string;

    constructor() {
        this.lastName = "";
        this.name = "";
    }

    public getName: Function = (): string => {
        return this.name;
    }

    public setName: Function = (name: string): void => {
        this.name = name;
    }

    public getLastName: Function = (): string => {
        return this.lastName;
    }

    public setLastName: Function = (aLastName: string): void => {
        this.lastName = aLastName;
    }

}

export default BaseBean;
