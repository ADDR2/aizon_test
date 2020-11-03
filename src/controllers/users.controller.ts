/* Local libraries */
import ColoredString from '../helpers/coloredStrings';

/* Services */
import UsersService from '../services/users.service';

/* Types */
import { LoginUserBody } from '../interfaces/Users';

class UsersController {
    static async loginUser(loginUserBody: LoginUserBody): Promise<string> {
        try {
            return await UsersService.login(loginUserBody);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw error;
        }
    }
}

export default UsersController;