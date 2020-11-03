/* 3rd party libraries */
import express, { Response, Request } from "express";
import passport from 'passport';

/* Controllers */
import ScreensController from "../controllers/screens.controller";

const router = express.Router();

/*
    @param req: request object
    @param res: response object
    function createScreen: endpoint that creates a screen
*/
const createScreen = (req: Request, res: Response) => {

    ScreensController.createScreens(req.body, req.params.solutionId)
        .then(screen => {
            res.status(201).send(screen);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function createScreen: endpoint that updates a screen
*/
const updateScreen = (req: Request, res: Response) => {

    ScreensController.updateScreen(req.body, req.params.solutionId)
        .then(screen => {
            res.status(201).send(screen);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function deleteScreen: endpoint that deletes a screen
*/
const deleteScreen = (req: Request, res: Response) => {

    ScreensController.deleteScreen(req.params.screenId, req.params.solutionId)
        .then(wasDeleted => {
            res.status(204).send(wasDeleted);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function getById: endpoint that gets a screen
*/
const getById = (req: Request, res: Response) => {

    ScreensController.getById(req.params.screenId, req.params.solutionId)
        .then(screen => {
            res.status(200).send(screen);
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
    url: "http://localhost:3000/screens/:solutionId"
*/
router.post("/:solutionId", passport.authenticate('jwt', { session: false }), createScreen);

/*
Route of updateScreen
Example of use:
    method: PATCH
    url: "http://localhost:3000/screens/:solutionId"
*/
router.patch("/:solutionId", passport.authenticate('jwt', { session: false }), updateScreen);

/*
Route of deleteScreen
Example of use:
    method: DELETE
    url: "http://localhost:3000/screens/:screenId/solution/:solutionId"
*/
router.delete("/:screenId/solution/:solutionId", passport.authenticate('jwt', { session: false }), deleteScreen);

/*
Route of getById
Example of use:
    method: GET
    url: "http://localhost:3000/screens/:screenId/solution/:solutionId"
*/
router.get("/:screenId/solution/:solutionId", passport.authenticate('jwt', { session: false }), getById);

export default router;