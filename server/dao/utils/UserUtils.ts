import Utils from './Utils';
import User from '../../models/User';
import Constants from '../../components/Constants';

class UserUtils extends Utils {

    constructor() {
        super();
    }

    private readonly fieldsToFilter = ['id','name','lastName','age'];

    public getModel: Function = (user: User): any => {
        return user;
    }

    public getOptions: Function = (filter: any): any => {
        let options: any = {};
        let conditions:any ={};
        
        if(filter.id)  this.getCondition(conditions, filter.id,this.fieldsToFilter[0]);
        
        if(filter.name) this.getCondition(conditions,filter.name,this.fieldsToFilter[1]);
        
        if(filter.lastName)  this.getCondition(conditions,filter.lastName,this.fieldsToFilter[2]);

        if(filter.age) this.getCondition(conditions,filter.age,this.fieldsToFilter[3]);
        
        if (this.exists(conditions)) {
            options = conditions;
        }

        return options;
    }

    // Private Functions
    private getCondition: Function = ( filter:any,condition: any, fieldToFilter:any): any => {
        return this.buildCondition(filter,condition.criteria, condition.values, fieldToFilter);
    }

     // Privates Functions
    private buildCondition: Function = (filter:any, operator: string, values: any, fieldToFilter:any): any => {
        let aCondition: any={};

        switch(operator) {
            case Constants.OR_OPERATOR:
                filter[Constants.OR_OPERATOR_DB] ? filter[Constants.OR_OPERATOR_DB] = filter[Constants.OR_OPERATOR_DB]  : filter[Constants.OR_OPERATOR_DB] = [];
                this.buildExpressions(filter[Constants.OR_OPERATOR_DB], values, fieldToFilter);
                break;
            case Constants.EQ_OPERATOR:
                aCondition[Constants.EQ_OPERATOR_DB] = values[0];
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.NE_OPERATOR:
                aCondition[Constants.NE_OPERATOR_DB] = values[0];
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.LT_OPERATOR:
                aCondition[Constants.LT_OPERATOR_DB] = values[0];
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.SIZE_OPERATOR:
                aCondition[Constants.SIZE_OPERATOR_DB] = values[0];
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.LTE_OPERATOR:
                aCondition[Constants.LTE_OPERATOR_DB] = values[0];
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.GT_OPERATOR:
                aCondition[Constants.GT_OPERATOR_DB] = values[0];
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.GTE_OPERATOR:
                aCondition[Constants.GTE_OPERATOR_DB] = values[0];
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.IN_OPERATOR:
                aCondition[Constants.IN_OPERATOR_DB] = values;
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.NOTIN_OPERATOR:
                aCondition[Constants.NOTIN_OPERATOR_DB] =  values;
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.LIKE_OPERATOR:
                aCondition[Constants.REGEX_OPERATOR_DB] = '.*' + values[0] + '.*';
                filter[fieldToFilter]= aCondition;
                break;
            case Constants.NOTLIKE_OPERATOR:
                aCondition[Constants.NOT_OPERATOR_DB] = '.*' + values[0] + '.*';
                filter[fieldToFilter]= aCondition;
                break;
            default:
                // Default Equals
                aCondition[Constants.EQ_OPERATOR_DB] =  values[0];
                filter[fieldToFilter]= aCondition;
                break;
        }
        return aCondition;
    }

    private buildExpressions:Function = (filter:any[] , values: any, field:any) =>{
        for(let value of values){
            let expression:any = {};
            expression[field] = value;
            filter.push(expression);
        }
    }

}

export default UserUtils;
