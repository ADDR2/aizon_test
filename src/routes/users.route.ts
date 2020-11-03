/* 3rd party libraries */
import express, { Response, Request } from "express";
import passport from 'passport';

/* Controllers */
import UsersController from "../controllers/users.controller";

const router = express.Router();

/*
    @param req: request object
    @param res: response object
    function loginUser: endpoint that logs in a user
*/
const loginUser = (req: Request, res: Response) => {

    UsersController.loginUser(req.body)
        .then(token => {
            res.status(201).send(token);
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



export default router;