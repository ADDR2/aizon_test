/* Local libraries */
import ColoredString from '../helpers/coloredStrings';
import HttpError from '../helpers/httpError';
import { USER_LOGIN_ERROR, USER_SIGNUP_ERROR } from '../helpers/errorCodes';

/* Services */
import UsersService from '../services/users.service';

/* Types */
import { LoginUserBody, SignupUserBody } from '../interfaces/Users';

class UsersController {
    static async loginUser(loginUserBody: LoginUserBody): Promise<string> {
        try {
            return await UsersService.login(loginUserBody);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            if (error instanceof HttpError) {
                throw error;
            } else {
                throw new HttpError(USER_LOGIN_ERROR);
            }
        }
    }

    static async signupUser(signupUserBody: SignupUserBody): Promise<string> {
        try {
            return await UsersService.signup(signupUserBody);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            if (error instanceof HttpError) {
                throw error;
            } else {
                throw new HttpError(USER_SIGNUP_ERROR);
            }
        }
    }

    static async logoutUser(loginUserBody: LoginUserBody): Promise<string> {
        try {
            return await UsersService.login(loginUserBody);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw error;
        }
    }
}

export default UsersController;