/* 3rd party libraries */
import { ExtractJwt, Strategy } from 'passport-jwt';

/* Services */
import UsersService from '../services/users.service';

/* Types */
import { User } from '../models/users.model';

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
};


export default new Strategy(options, function ({ id }, done) {
    UsersService.getUserById(id)
        .then((user: User) => {
            user.token && done(null, { ...user, id });
            !user.token && done(null, null);
        })
        .catch((error: Error) => {
            console.error(error);
            done(null, null);
        })
        ;
});