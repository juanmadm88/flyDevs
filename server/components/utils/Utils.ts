import Constants from '../Constants';
abstract class Utils {

    public exists: Function = (anObject: any): boolean => {
        return anObject && Object.keys(anObject).length > 0;
    }

    public getCondition: Function = (param: string): any => {
        let splitParam: string[] = param.split(':');
        if (splitParam.length === 1) {
            // By default it will be compared by equals
            return this.buildCondition(Constants.EQ_OPERATOR, splitParam[0]);
        }
        return this.buildCondition(splitParam[0], splitParam[1]);
    }

    // Privates Functions
    private buildCondition: Function = (criteria: string, values: string): any => {
        let aCondition: any = {};
        aCondition.criteria = criteria;
        aCondition.values = this.splitValues(values);

        return aCondition;
    }

    private splitValues: Function = (values: string) => {
        let splitParams: any[] = values.split(',');
        for (let i = 0; i < splitParams.length; i++) {
            if (!isNaN(splitParams[i])) {
                splitParams[i] = parseInt(splitParams[i], 10);
            }
        }
        return splitParams;
    }
}

export default Utils;
