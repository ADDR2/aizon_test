/* Local libraries */
import SolutionSchema, { Solution } from '../models/solutions.model';

/* Types */
import { CreateSolutionBody, UpdateSolutionBody } from '../interfaces/Solutions';
import solutionsModel from '../models/solutions.model';

class SolutionsService {
    static create(createSolutionBody: CreateSolutionBody): Promise<Solution> {
        const model = new SolutionSchema();

        model.company = createSolutionBody.company;
        model.business = createSolutionBody.business;
        model.description = createSolutionBody.description || '';

        return model.save();
    };

    static async update(updateSolution: UpdateSolutionBody, id: String): Promise<any> {
        const { company, business, description } = updateSolution;

        const fieldsToUpdate = {};

        if (company) fieldsToUpdate['company'] = company;
        if (business) fieldsToUpdate['business'] = business;
        if (description) fieldsToUpdate['description'] = description;

        const solution = await SolutionSchema.updateOne({ _id: id }, fieldsToUpdate);
        return solution;
    }

    static async delete(id: String): Promise<Boolean> {
        const query = await SolutionSchema.deleteOne({ _id: id });
        if (query.deletedCount === 0) throw new Error('Solution not found');
        return true;
    }

    static async getAll(): Promise<Solution[]> {
        const list = await SolutionSchema.find();
        if (!list.length) throw new Error('Solutions not found');
        return list;
    }

    static async getById(id: String): Promise<Solution> {
        const list = await SolutionSchema.find({_id: id});
        if (!list.length) throw new Error('Solution not found');
        return list[0];
    }
}

export default SolutionsService;