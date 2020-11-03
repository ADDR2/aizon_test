/* 3rd party types */
import { Request } from "express";

/* Types */
import { User } from "../models/users.model";

export interface RequestWithAuthenticatedUser extends Request {
    user: User;
}