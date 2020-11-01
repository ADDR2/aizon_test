/* Local libraries */
import HttpError from '../helpers/httpError';
import { WIDGET_CREATE_ERROR, WiDGET_UPDATE_ERROR, WIDGET_DELETE_ERROR, WIDGET_NOT_FOUND_ERROR } from '../helpers/errorCodes';
import ColoredString from '../helpers/coloredStrings';

/* Services */
import WidgetService from '../services/widgets.service';
import { CreateWidgetBody, UpdateWidgetBody } from '../interfaces/Widgets';
import { Widget } from '../models/widgets.model';

class WidgetsController {
    static async createWidget(CreateWidgetBody: CreateWidgetBody, screenId: string, id: String): Promise<any> {
        try {
            const screen = await WidgetService.create(CreateWidgetBody, screenId, id);
            return screen;
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(WIDGET_CREATE_ERROR);
        }
    }

    static async updateWidget(updateWidgetBody: UpdateWidgetBody, screenId: string, id: String, widgetId: string): Promise<any> {
        try {
            const screen = await WidgetService.update(updateWidgetBody, screenId, id, widgetId);
            return screen;
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(WiDGET_UPDATE_ERROR);
        }
    }

    static async deleteWidget(widgetId: string, screenId: string, id: string): Promise<Boolean> {
        try {
            return await WidgetService.delete(widgetId, screenId, id);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(WIDGET_DELETE_ERROR);
        }
    }

    static async getById(widgetId: string, screenId: string, id: string): Promise<Widget> {
        try {
            return await WidgetService.getById(widgetId, screenId, id);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(WIDGET_NOT_FOUND_ERROR);
        }
    }
}

export default WidgetsController;