
/* 3rd party types */
import { Document } from 'mongoose';

/* Services */
import DBService from '../services/dB.service';

const { Schema } = DBService.connection;

export interface User extends Document {
    username: string;
    role: string;
    password: string;
    token?: string;
}

const usersSchema = new Schema({
    username: {
        type: String,
        maxlength: [80, 'Username cannot have more than 80 letters'],
        required: [true, 'Username is required']
    },
    role: {
        type: String,
        enum: {
            values: ['admin', 'user'],
            message: 'Role has to be either admin or user'
        },
        required: [true, 'Role is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    token: {
        type: String,
    }
});

export default DBService.connection.model('users', usersSchema);