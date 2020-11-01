/* 3rd party libraries */
import express, { Response, Request } from "express";
import passport from 'passport';

/* Local libraries */
import ColoredString from '../helpers/coloredStrings';

/* Controllers */
import SolutionsController from "../controllers/solutions.controller";

const router = express.Router();

/*
    @param req: request object
    @param res: response object
    function createSolution: endpoint that creates a solution
*/
const createSolution = (req: Request, res: Response) => {

    SolutionsController.createSolution(req.body)
        .then(client => {
            res.status(201).send({ id: client });
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}

/*
    @param req: request object
    @param res: response object
    function udpateSolution: endpoint that update a solution
*/
const udpateSolution = (req: Request, res: Response) => {

    SolutionsController.updateSolution(req.body, req.params.id)
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
    function deleteSolution: endpoint that delete a solution
*/
const deleteSolution = (req: Request, res: Response) => {

    SolutionsController.deleteSolution(req.params.id)
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
    function getAllSolution: endpoint that get all the solution
*/
const getAllSolutions = (req: Request, res: Response) => {

    SolutionsController.getAll()
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
    function getById: endpoint that get a solution
*/
const getById = (req: Request, res: Response) => {

    SolutionsController.getById(req.params.id)
        .then(client => {
            res.status(200).send(client);
        })
        .catch(error => {
            res.status(error.httpCode).send(error.message);
        })
        ;
}


/*
Route of createSolution
Example of use:
    method: POST
    url: "http://localhost:3000/solutions"
*/
router.post("/", /*passport.authenticate('jwt', { session: false }),*/ createSolution);

/*
Route of updateSolution
Example of use:
    method: PATH
    url: "http://localhost:3000/solutions/:id"
*/
router.patch("/:id", /*passport.authenticate('jwt', { session: false }),*/ udpateSolution);

/*
Route of deleteSolution
Example of use:
    method: DELETE
    url: "http://localhost:3000/solutions/:id"
*/
router.delete("/:id", /*passport.authenticate('jwt', { session: false }),*/ deleteSolution);

/*
Route of getAll
Example of use:
    method: GET
    url: "http://localhost:3000/solutions"
*/
router.get("/", /*passport.authenticate('jwt', { session: false }),*/ getAllSolutions);

/*
Route of getById
Example of use:
    method: GET
    url: "http://localhost:3000/solutions/:id"
*/
router.get("/:id", /*passport.authenticate('jwt', { session: false }),*/ getById);


export default router;