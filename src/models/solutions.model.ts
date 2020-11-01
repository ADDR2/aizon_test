/* 3rd party types */
import { Document } from 'mongoose';

/* Services */
import DBService from '../services/dB.service';

/* Models */
import ScreensSchema, { Screen } from './screens.model';

const { Schema } = DBService.connection;

export interface Solution extends Document {
    company: string;
    business: string;
    description?: string;
    created?: Date;
    screens: Screen[];
}  

const schema = new Schema({
    company: {
        type: String,
        minlength: [2, 'Company cannot have less than 2 letters'],
        maxlength: [80, 'Company cannot have more than 80 letters'],
        required: [true, 'Company Name is required']
    },
    business: {
        type: String,
        minlength: [2, 'Business cannot have less than 2 letters'],
        maxlength: [80, 'Business cannot have more than 80 letters'],
        required: [true, 'Business is required'] 
    },
    description: {
        maxlength: [255, 'Description cannot have more than 255 letters'],
        type: String
    },
    created: {
        type: Date
    },
    screens: [ScreensSchema]
}).index({ company: 1, business: 1 }, { unique: true });

export default DBService.connection.model<Solution>('solutions', schema);
