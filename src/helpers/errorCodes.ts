import HttpErrorParams from "../interfaces/HttpErrorParams";

export const DB_CONNCTION_ERROR: HttpErrorParams = {
    message: 'Something went wrong trying to connect to DB :/',
    code: 1,
    httpCode: 500
};

export const SOLUTIONS_CREATE_ERROR: HttpErrorParams = {
    message: 'Could not create solution. Check body params.',
    code: 2,
    httpCode: 400
};


export const SOLUTIONS_UPDATE_ERROR: HttpErrorParams = {
    message: 'Could not update solution. Check body params.',
    code: 3,
    httpCode: 400
};

export const SOLUTIONS_DELETE_ERROR: HttpErrorParams = {
    message: 'Could not find the solution. Check id param.',
    code: 4,
    httpCode: 404
};

export const SOLUTIONS_NOT_FOUND_ERROR: HttpErrorParams = {
    message: 'Could not find any solution. Check id param.',
    code: 5,
    httpCode: 404
};

export const SCREENS_CREATE_ERROR: HttpErrorParams = {
    message: 'Could not create screen. Check body params.',
    code: 6,
    httpCode: 404
};

export const SCREENS_UPDATE_ERROR: HttpErrorParams = {
    message: 'Could not update screen. Check body params.',
    code: 7,
    httpCode: 400
};

export const SCREENS_DELETE_ERROR: HttpErrorParams = {
    message: 'Could not find the solution or screen. Check id param.',
    code: 8,
    httpCode: 404
};

export const SCREENS_NOT_FOUND_ERROR: HttpErrorParams = {
    message: 'Could not find the solution or the screen. Check id param.',
    code: 9,
    httpCode: 404
};

export const WIDGET_CREATE_ERROR: HttpErrorParams = {
    message: 'Could not create Widget. Check body params.',
    code: 10,
    httpCode: 400
};

export const WiDGET_UPDATE_ERROR: HttpErrorParams = {
    message: 'Could not update widget. Check body params.',
    code: 11,
    httpCode: 400
};

export const WIDGET_DELETE_ERROR: HttpErrorParams = {
    message: 'Could not find the solution/screen/widget. Check id param.',
    code: 12,
    httpCode: 404
};

export const WIDGET_NOT_FOUND_ERROR: HttpErrorParams = {
    message: 'Could not find the solution/screen/widget. Check id param.',
    code: 13,
    httpCode: 404
};

export const USER_NOT_FOUND_ERROR: HttpErrorParams = {
    message: 'Could not find user. Check your username.',
    code: 14,
    httpCode: 404
};

export const INCORRECT_PASSWORD: HttpErrorParams = {
    message: 'Could not authenticate user. Check your credentials.',
    code: 15,
    httpCode: 401
};

export const USER_SIGNED_UP: HttpErrorParams = {
    message: 'User is already signed up. Check username.',
    code: 16,
    httpCode: 400
};

export const USER_LOGIN_ERROR: HttpErrorParams = {
    message: 'Could not login user. Check body.',
    code: 17,
    httpCode: 400
};

export const USER_SIGNUP_ERROR: HttpErrorParams = {
    message: 'Could not signup user. Check body.',
    code: 18,
    httpCode: 400
};

export const USER_LOGOUT_ERROR: HttpErrorParams = {
    message: 'Could not logout user.',
    code: 19,
    httpCode: 500
};