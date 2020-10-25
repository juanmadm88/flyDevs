import BaseBean from './BaseBean';

class User extends BaseBean{

    private age: number;

    constructor() {
        super();
        this.age = 0; 
    }

    public getAge: Function = (): number => {
        return this.age;
    }

    public setAge: Function = (anAge: number): void => {
        this.age = anAge;
    }
}

export default User;
