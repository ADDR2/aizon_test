/* Local libraries */
import HttpError from '../helpers/httpError';
import { SOLUTIONS_CREATE_ERROR, SOLUTIONS_UPDATE_ERROR, SOLUTIONS_DELETE_ERROR, SOLUTIONS_NOT_FOUND_ERROR } from '../helpers/errorCodes';
import ColoredString from '../helpers/coloredStrings';

/* Services */
import SolutionsService from '../services/solutions.service';
import { CreateSolutionBody, UpdateSolutionBody } from '../interfaces/Solutions';
import { Solution } from '../models/solutions.model';

class SolutionsController {
    static async createSolution(createSolutionBody: CreateSolutionBody): Promise<string> {
        try {
            const solution = await SolutionsService.create(createSolutionBody);
            return solution.id;
        } catch(error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(SOLUTIONS_CREATE_ERROR);
        }
    }

    static async updateSolution(updateSolutionBody: UpdateSolutionBody, id: String) : Promise<any>{
        try {
            const solution = await SolutionsService.update(updateSolutionBody, id);
            return solution;
        } catch(error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(SOLUTIONS_UPDATE_ERROR);
        }
    }

    static async deleteSolution(id: String) : Promise<Boolean>{
        try {
            return await SolutionsService.delete(id);
        } catch(error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(SOLUTIONS_DELETE_ERROR);
        }
    }

    static async getAll(): Promise<Solution[]>{
        try {
            return await SolutionsService.getAll();
        } catch(error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(SOLUTIONS_NOT_FOUND_ERROR);
        }
    }

    static async getById(id: String): Promise<Solution>{
        try {
            return await SolutionsService.getById(id);
        } catch(error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(SOLUTIONS_NOT_FOUND_ERROR);
        }
    }
}

export default SolutionsController;