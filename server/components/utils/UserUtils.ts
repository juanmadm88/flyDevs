import Utils from './Utils';

class UserUtils extends Utils {

    constructor() {
        super();
    }

    // Publics Functions
    public getFilter: Function = (params: any): any => {
        let filter: any = {};

        if(params.id) filter.id = this.getCondition(params.id);
        if(params.name) filter.name  =  this.getCondition(params.name);
        if(params.lastName) filter.lastName =  this.getCondition(params.lastName);
        if(params.age) filter.age =  this.getCondition(params.age);
        
        return filter;
    }

}

export default UserUtils;
