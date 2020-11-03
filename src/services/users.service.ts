/* 3rd party libraries */
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

/* Local libraries */
import HttpError from '../helpers/httpError';
import {
    USER_NOT_FOUND_ERROR,
    INCORRECT_PASSWORD,
    USER_SIGNED_UP
} from '../helpers/errorCodes';

/* Models */
import UsersSchema from '../models/users.model';


/* Types */
import { LoginUserBody, SignupUserBody } from '../interfaces/Users';

class UsersService {
    static async login({ username, password }: LoginUserBody): Promise<string> {
        const user = await UsersSchema.findOne({ username });

        if (!user) throw new HttpError(USER_NOT_FOUND_ERROR);

        const encoded = crypto.createHash("sha256")
            .update(password)
            .digest("hex");

        if (encoded !== user.password) throw new HttpError(INCORRECT_PASSWORD);

        const token = jwt.sign(
            { id: user._id.toString() },
            process.env.SECRET,
            { expiresIn: 100000 }
        );

        await UsersSchema.updateOne({ _id: user.id }, { token });

        return token;
    }

    static async signup({ username, password, role }: SignupUserBody): Promise<string> {
        const user = await UsersSchema.findOne({ username });

        if (user) throw new HttpError(USER_SIGNED_UP);

        const newUser = new UsersSchema();
        newUser.username = username;
        newUser.password = crypto.createHash("sha256").update(password).digest("hex");
        newUser.role = role;

        await newUser.save();

        return await UsersService.login({ username, password });
    }
}

export default UsersService;