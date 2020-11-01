/* 3rd party libraries */
import express, { Response, Request } from "express";
import passport from 'passport';

/* Local libraries */
import ColoredString from '../helpers/coloredStrings';

/* Controllers */
import WidgetsController from "../controllers/widgets.controller";

const router = express.Router();

/*
    @param req: request object
    @param res: response object
    function createWidget: endpoint that creates a widget
*/
const createWidget = (req: Request, res: Response) => {

    WidgetsController.createWidget(req.body, req.params.screenId, req.params.id)
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

const updateWidget = (req: Request, res: Response) => {

    WidgetsController.updateWidget(req.body, req.params.screenId, req.params.id, req.params.widgetId)
        .then(client => {
            res.status(200).send(client);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function deleteWidget: endpoint that delete a widget
*/
const deleteWidget = (req: Request, res: Response) => {

    WidgetsController.deleteWidget(req.params.widgetId, req.params.screenId, req.params.id)
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
    function getById: endpoint that get a widegt
*/
const getById = (req: Request, res: Response) => {

    WidgetsController.getById(req.params.widgetId, req.params.screenId, req.params.id)
        .then(client => {
            res.status(200).send(client);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
Route of createWidget
Example of use:
    method: POST
    url: "http://localhost:3000/widgets/:screenId/solution/:id"
*/
router.post("/:screenId/solution/:id", /*passport.authenticate('jwt', { session: false }),*/ createWidget);


/*
Route of updateWidget
Example of use:
    method: PATCH
    url: "http://localhost:3000/widgets/:widgetId/screen/:screenId/solution/:id"
*/
router.patch("/:widgetId/screen/:screenId/solution/:id", /*passport.authenticate('jwt', { session: false }),*/ updateWidget);

/*
Route of deleteWidget
Example of use:
    method: DELETE
    url: "http://localhost:3000/widgets/:widgetId/screen/:screenId/solution/:id"
*/
router.delete("/:widgetId/screen/:screenId/solution/:id", /*passport.authenticate('jwt', { session: false }),*/ deleteWidget);


/*
Route of getById
Example of use:
    method: GET
    url: "http://localhost:3000/widgets/:widgetId/screen/:screenId/solution/:id"
*/
router.get("/:widgetId/screen/:screenId/solution/:id", /*passport.authenticate('jwt', { session: false }),*/ getById);




export default router;