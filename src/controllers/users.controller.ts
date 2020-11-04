/* Local libraries */
import ColoredString from '../helpers/coloredStrings';
import HttpError from '../helpers/httpError';
import {
    USER_LOGIN_ERROR,
    USER_SIGNUP_ERROR,
    USER_LOGOUT_ERROR,
    USER_DELETE_ERROR
} from '../helpers/errorCodes';

/* Services */
import UsersService from '../services/users.service';

/* Types */
import { LoginUserBody, SignupUserBody } from '../interfaces/Users';
import { User } from '../models/users.model';

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

    static async logoutUser(loggedUser: User): Promise<void> {
        try {
            await UsersService.logout(loggedUser);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(USER_LOGOUT_ERROR);
        }
    }

    static async deleteUser(loggedUser: User): Promise<void> {
        try {
            await UsersService.delete(loggedUser);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(USER_DELETE_ERROR);
        }
    }
}

export default UsersController;