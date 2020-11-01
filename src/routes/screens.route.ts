/* 3rd party libraries */
import express, { Response, Request } from "express";
import passport from 'passport';

/* Local libraries */
import ColoredString from '../helpers/coloredStrings';

/* Controllers */
import ScreensController from "../controllers/screens.controller";

const router = express.Router();

/*
    @param req: request object
    @param res: response object
    function createScreen: endpoint that creates a screen
*/
const createScreen = (req: Request, res: Response) => {

    ScreensController.createScreens(req.body, req.params.id)
        .then(client => {
            res.status(201).send(client);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function createScreen: endpoint that update a screen
*/
const updateScreen = (req: Request, res: Response) => {

    ScreensController.updateScreen(req.body, req.params.id)
        .then(client => {
            res.status(201).send(client);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function createScreen: endpoint that delete a screen
*/
const deleteScreen = (req: Request, res: Response) => {

    ScreensController.deleteScreen(req.params.screenId, req.params.id)
        .then(client => {
            res.status(204).send(client);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function createScreen: endpoint that get a screen
*/
const getById = (req: Request, res: Response) => {

    ScreensController.getById(req.params.screenId, req.params.id)
        .then(client => {
            res.status(200).send(client);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}


/*
Route of createScreen
Example of use:
    method: POST
    url: "http://localhost:3000/screens/:id"
*/
router.post("/:id", /*passport.authenticate('jwt', { session: false }),*/ createScreen);

/*
Route of updateScreen
Example of use:
    method: PATH
    url: "http://localhost:3000/screens/:id"
*/
router.patch("/:id", /*passport.authenticate('jwt', { session: false }),*/ updateScreen);

/*
Route of updateScreen
Example of use:
    method: PATH
    url: "http://localhost:3000/screens/:screenId/solution/:id"
*/
router.delete("/:screenId/solution/:id", /*passport.authenticate('jwt', { session: false }),*/ deleteScreen);

/*
Route of getById
Example of use:
    method: GET
    url: "http://localhost:3000/screens/:screenId/solution/:id"
*/
router.get("/:screenId/solution/:id", /*passport.authenticate('jwt', { session: false }),*/ getById);

export default router;