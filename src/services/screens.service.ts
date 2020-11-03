/* Local libraries */
import { Screen } from '../models/screens.model';
import SolutionSchema from '../models/solutions.model';


/* Types */
import { CreateScreensBody, UpdateScreensBody } from '../interfaces/Screens';

class ScreensService {
    static async create(createScreensBody: CreateScreensBody, id: String): Promise<Screen> {

        const solution = await SolutionSchema.findOne({ _id: id });

        if (!solution) throw new Error('Solution not found');

        await SolutionSchema.updateOne({ _id: id }, { $push: { screens: <Screen>createScreensBody } });
        return <Screen>createScreensBody;
    };

    static async update(updateScreensBody: UpdateScreensBody, id: String) : Promise<UpdateScreensBody>{
        const solution = await SolutionSchema.findOne({ '_id': id });
        const oldScreen = solution.screens.id(updateScreensBody.screenId);

        if(!oldScreen) throw new Error('Screen not found');

        oldScreen.set(updateScreensBody);
        solution.save();

        return updateScreensBody;
    }

    static async delete(screenId: string, id: String): Promise<Boolean>{
        const solution = await SolutionSchema.findOne({ '_id': id });

        if(!solution) throw new Error('Solution not found');

        solution.screens.id(screenId).remove();
        solution.save();

        return true;
    }

    static async getById(screenId: string, id: String) : Promise<Screen>{
        const solution = await SolutionSchema.findOne({ '_id': id });
        if(!solution) throw new Error('Solution not found');

        const screen : Screen = solution.screens.id(screenId);

        if(!screen) throw new Error('Screen not found');

        return screen;
    }
}

export default ScreensService;