import Constants from '../components/Constants';
import JwtUtils from '../components/JwtUtils';
import Logger from '../components/Logger';
import ResponseUtils from '../components/utils/ResponseUtils';

let jwt = require('jsonwebtoken');

class Interceptor {

    private static readonly UNEXISTING_TOKEN: string = "UNEXISTING TOKEN";
    private static readonly INVALID_TOKEN: string = "INVALID TOKEN";
    private static readonly NOT_AUTHORIZED: string = "NOT AUTHORIZED";
    private static readonly INVALID_AUTHORIZATION_TYPE: string = "INVALID AUTHORIZATION TYPE";

    private static instance: Interceptor;
    private logger: Logger;
    private config: any;

    private constructor() {
        this.logger = new Logger('Interceptor');
    }

    public static getInstance: Function = (): Interceptor => {
        if (!Interceptor.instance) {
            Interceptor.instance = new Interceptor();
        }
        return Interceptor.instance;
    }

    public intercept = async(req: any, res: any, next: Function) => {
        if (!this.isInterceptable(req)) {
            next();
            return;
        } 
        if (!req.headers || !req.headers.authorization) {
            this.logger.error(Interceptor.UNEXISTING_TOKEN);
            ResponseUtils.sendForbiddenReq(res, Interceptor.UNEXISTING_TOKEN,403);
            return;
        }
        let authorization:string = req.headers.authorization.toString();
        let tokenArray:string[] = authorization.split(' ');
        if (tokenArray.length !== 2) {
            this.logger.error(`${Interceptor.NOT_AUTHORIZED}: ${authorization}`);
            ResponseUtils.sendForbiddenReq(res, Interceptor.NOT_AUTHORIZED,403);
            return;
        } 
        if (tokenArray[0] !== Constants.BEARER_AUTHORIZATION_TYPE) {
            this.logger.error(`${Interceptor.INVALID_AUTHORIZATION_TYPE}: ${authorization}`);
            ResponseUtils.sendForbiddenReq(res, Interceptor.INVALID_AUTHORIZATION_TYPE,403);
            return;
        }
        try {
            await JwtUtils.verify(tokenArray[1]);
            next();
        } catch (error) {
            this.logger.error(`${Interceptor.INVALID_TOKEN}: ${error}`);
            ResponseUtils.sendInvalidToken(res, Interceptor.INVALID_TOKEN,401);
        }
    }

    // Privates Functions
    //Abm Creation and Login are not interceptable
    private isInterceptable = (req: any): boolean => {
        const interceptableURL = !req.originalUrl.includes(Constants.NOT_INTERCEPTABLE_URL);
        return interceptableURL;
    }
}

export default Interceptor;
