let jwt = require('jsonwebtoken');
import Constants from '../components/Constants';


class JwtUtils {

    public createToken = (data: any): any => {
        const expiresIn = parseInt(Constants.TOKEN_EXPIRATION);
        const dataStoredInToken = {
          _id: Math.random,
          admin : data
        };
        return {
          token: jwt.sign(dataStoredInToken, Constants.JWT_SECRET, { expiresIn })
        }
    }

    public verify = async (token:string) => {
        const secret = Constants.JWT_SECRET;
        let payload:any = {}
        try {
            payload = await jwt.verify(token , secret);
        }catch {
            throw new Error();
        }
        return payload;
    }

}

export default new JwtUtils();
