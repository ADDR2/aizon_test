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
    message: 'Could not found the solution. Check id param.',
    code: 4,
    httpCode: 404
};

export const SOLUTIONS_NOT_FOUND_ERROR: HttpErrorParams = {
    message: 'Could not found any solution. Check id param.',
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
    message: 'Could not found the solution or screen. Check id param.',
    code: 8,
    httpCode: 404
};

export const SCREENS_NOT_FOUND_ERROR: HttpErrorParams = {
    message: 'Could not found the solution or the screen. Check id param.',
    code: 9,
    httpCode: 404
};


