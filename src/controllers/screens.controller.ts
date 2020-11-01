/* Local libraries */
import HttpError from '../helpers/httpError';
import { SCREENS_CREATE_ERROR, SCREENS_UPDATE_ERROR, SCREENS_DELETE_ERROR, SCREENS_NOT_FOUND_ERROR } from '../helpers/errorCodes';
import ColoredString from '../helpers/coloredStrings';

/* Services */
import ScreenService from '../services/screens.service';
import { CreateScreensBody, UpdateScreensBody } from '../interfaces/Screens';
import { Screen } from '../models/screens.model'

class ScreensController {
    static async createScreens(createScreensBody: CreateScreensBody, id: String): Promise<any> {
        try {
            const screen = await ScreenService.create(createScreensBody, id);
            return screen;
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(SCREENS_CREATE_ERROR);
        }
    }

    static async updateScreen(updateScreenBody: UpdateScreensBody, id: String): Promise<any> {
        try {
            const screen = await ScreenService.update(updateScreenBody, id);
            return screen;
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(SCREENS_UPDATE_ERROR);
        }
    }

    static async deleteScreen(screenid: string, id: String): Promise<Boolean> {
        try {
            return await ScreenService.delete(screenid, id);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(SCREENS_DELETE_ERROR);
        }
    }

    static async getById(screenId: string, id: String): Promise<Screen> {
        try {
            return await ScreenService.getById(screenId, id);
        } catch (error) {
            console.error(new ColoredString(error.message).red());
            throw new HttpError(SCREENS_NOT_FOUND_ERROR);
        }
    }
}

export default ScreensController;