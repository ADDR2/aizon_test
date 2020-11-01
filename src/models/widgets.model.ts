
/* 3rd party types */
import { Document } from 'mongoose';

/* Services */
import DBService from '../services/dB.service';

const { Schema } = DBService.connection;

export interface Widget extends Document {
    width: number;
    height: number;
    type: string;
}

const WidgetsSchema = new Schema({
    width: {
        type: Number,
        min: [0, 'Width cannot be negative'],
        required: [true, 'Width is required']
    },
    height: {
        type: Number,
        min: [0, 'Height cannot be negative'],
        required: [true, 'Heigth is required'] 
    },
    type: {
        type: String,
        minlength: [2, 'Type cannot have less than 2 letters'],
        maxlength: [80, 'Type cannot have more than 80 letters'],
        required: [true, 'Type is required'] 
    }
});

export default DBService.connection.model('widgets', WidgetsSchema);