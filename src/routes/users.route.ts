/* 3rd party libraries */
import express, { Response, Request } from "express";
import passport from 'passport';

/* Controllers */
import UsersController from "../controllers/users.controller";

/* Types */
import { RequestWithAuthenticatedUser } from "../interfaces/CustomRequest";

const router = express.Router();

/*
    @param req: request object
    @param res: response object
    function loginUser: endpoint that logs in a user
*/
const loginUser = (req: Request, res: Response) => {

    UsersController.loginUser(req.body)
        .then(token => {
            res.status(200).send(token);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function loginUser: endpoint that signs up a user
*/
const signupUser = (req: Request, res: Response) => {

    UsersController.signupUser(req.body)
        .then(token => {
            res.status(200).send(token);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function loginUser: endpoint that logs out a user
*/
const logoutUser = (req: RequestWithAuthenticatedUser, res: Response) => {

    UsersController.logoutUser(req.user)
        .then(() => {
            res.status(204).send();
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

const deleteUser = (req: RequestWithAuthenticatedUser, res: Response) => {

    UsersController.deleteUser(req.user)
        .then(() => {
            res.status(204).send();
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}



/*
Route of loginUser
Example of use:
    method: POST
    url: "http://localhost:3000/users/login"
*/
router.post("/login", loginUser);

/*
Route of signupUser
Example of use:
    method: POST
    url: "http://localhost:3000/users/signup"
*/
router.post("/signup", signupUser);

/*
Route of logoutUser
Example of use:
    method: POST
    url: "http://localhost:3000/users/logout"
*/
router.post("/logout", passport.authenticate('jwt', { session: false }), logoutUser);

router.delete("/", passport.authenticate('jwt', { session: false }), deleteUser);



export default router;