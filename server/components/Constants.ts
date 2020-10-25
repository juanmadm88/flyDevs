abstract class Constants {

    // Error Messages
    public static ERROR_MESSAGE_GET_USER: string = "An error occurred while trying to get the user";
    public static ERROR_MESSAGE_GET_USER_BY_ID: string = "An error occurred while trying to get the user with id: ";
    public static ERROR_MESSAGE_CREATE_USER: string = "An error occurred while trying to create the user";
    public static ERROR_MESSAGE_UPDATE_USER: string = "An error occurred while trying to update the user with id: ";
    public static ERROR_MESSAGE_DELETE_USER: string = "An error occurred while trying to eliminate the user with id: ";
    public static ERROR_NON_EXISTING_ID: string = "non existing id";
    public static ERROR_MESSAGE_CREATE_ADMIN: string = "An error occurred while trying to create the admin";

    // HTTP methods
    public static GET_METHOD: string = "GET";
    public static POST_METHOD: string = "POST";
    public static PUT_METHOD: string = "PUT";
    public static DELETE_METHOD: string = "DELETE";

    // API Security
    public static readonly ENCRIPTATION_KEY: string  = (process.env.ENCRIPTATION_KEY) ? process.env.ENCRIPTATION_KEY : ' ';
    public static readonly INIT_VECTOR: string = (process.env.INIT_VECTOR) ? process.env.INIT_VECTOR : '';
    public static readonly JWT_SECRET: string = (process.env.JWT_SECRET) ? process.env.JWT_SECRET : '';
    public static readonly TOKEN_EXPIRATION: string = (process.env.TOKEN_EXPIRATION) ? process.env.TOKEN_EXPIRATION: ' ';
    public static readonly NOT_INTERCEPTABLE_URL: string = "/api/flyDevs/admins";

    // Authorization type
    public static readonly BEARER_AUTHORIZATION_TYPE: string = 'Bearer';

    // HTTP message
    public static UNAUTHORIZED_MESSAGE: string = "Unauthorized";
    public static FORBIDDEN_MESSAGE: string = "Forbidden";
    public static BAD_REQUEST_MESSAGE: string = "Bad Request";
    public static NOT_FOUND_MESSAGE: string = "Not found";
    public static INTERNAL_SERVER_ERROR_MESSAGE: string = "Internal Server Error";
    public static NOT_SUPPORTED_URL: string = "URL not supported";

    // Operators
    public static EQ_OPERATOR: string = "eq";
    public static SIZE_OPERATOR: string = "size";
    public static NE_OPERATOR: string = "ne";
    public static OR_OPERATOR: string = "or";
    public static IN_OPERATOR: string = "in";
    public static NOTIN_OPERATOR: string = "notIn";
    public static NOT_OPERATOR: string = "not";
    public static LIKE_OPERATOR: string = "like";
    public static NOTLIKE_OPERATOR: string = "notlike";
    public static LT_OPERATOR: string = "lt";
    public static LTE_OPERATOR: string = "lte";
    public static GT_OPERATOR: string = "gt";
    public static GTE_OPERATOR: string = "gte";

    //MongoDB Operators
    public static REGEX_OPERATOR_DB: string = "$regex";
    public static SIZE_OPERATOR_DB: string = "$size";
    public static EQ_OPERATOR_DB: string = "$eq";
    public static NE_OPERATOR_DB: string = "$ne";
    public static OR_OPERATOR_DB: string = "$or";
    public static IN_OPERATOR_DB: string = "$in";
    public static NOTIN_OPERATOR_DB: string = "$nin";
    public static NOT_OPERATOR_DB: string = "$not";
    public static LT_OPERATOR_DB: string = "$lt";
    public static LTE_OPERATOR_DB: string = "$lte";
    public static GT_OPERATOR_DB: string = "$gt";
    public static GTE_OPERATOR_DB: string = "$gte";

    // Connection Status
    public static DISCONNECTED: string = "Disconnected";
    public static CONNECTED: string = "Connected";
    public static CONNECTING: string = "Connecting";
    public static DISCONNECTING: string = "Disconnecting";

    public static UNKNOW: string = "Unknow";

    public static readonly AUTHORIZED_ADMIN: string = "Authorized Admin";
    public static readonly UNAUTHORIZED_ADMIN: string = "Unauthorized Admin";

    //Mssg DB Connection

    public static readonly SUCCESSFUL_CONNECTION: string = "Connection has been established successfully.";
    public static readonly ERROR_CONNECTION: string = "Unable to connect to the database: ";

}

export default Constants;
