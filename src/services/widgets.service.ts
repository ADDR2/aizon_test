/* Local libraries */
import { Widget } from '../models/widgets.model';
import SolutionModel, { Solution } from '../models/solutions.model';


/* Types */
import { CreateWidgetBody, UpdateWidgetBody } from '../interfaces/Widgets';

class WidgetService {
    static async create(createWidgetBody: CreateWidgetBody, screeId: string, id: String): Promise<Widget> {

        const solution = await SolutionModel.findOne({ _id: id });

        if (!solution) throw new Error('Solution not found');
        const screen = solution.screens.id(screeId);

        if (!screen) throw new Error('Screen not found');
        screen.widgets.push(createWidgetBody);

        solution.save();

        return <Widget>createWidgetBody;
    };

    static async update(updateWidgetBody: UpdateWidgetBody, screeId: string, id: String, widgetId: string) : Promise<any>{
        const solution = await SolutionModel.findOne({ '_id': id });

        if (!solution) throw new Error('Solution not found');

        const screen = solution.screens.id(screeId);
        
        if (!screen) throw new Error('Screen not found');

        const oldWidget = screen.widgets.id(widgetId);

        if (!oldWidget) throw new Error('Screen not found');

        oldWidget.set(updateWidgetBody);
        solution.save();

        return updateWidgetBody;
    }

    static async delete(widgetId: string, screenId: string, id: string): Promise<Boolean>{
        const solution = await SolutionModel.findOne({ '_id': id });

        if (!solution) throw new Error('Solution not found');

        const screen = solution.screens.id(screenId);
        
        if (!screen) throw new Error('Screen not found');


        screen.widgets.id(widgetId).remove();
        solution.save();

        return true;
    }

    static async getById(widgetId: string, screenId: string, id: string) : Promise<Widget>{
        const solution = await SolutionModel.findOne({ '_id': id });

        if (!solution) throw new Error('Solution not found');

        const screen = solution.screens.id(screenId);
        
        if (!screen) throw new Error('Screen not found');

        return screen.widgets.id(widgetId);
    }
}

export default WidgetService;