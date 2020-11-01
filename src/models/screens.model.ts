
/* 3rd party types */
import { Document } from 'mongoose';

/* Services */
import DBService from '../services/dB.service';

/* Models */
import WidgetsSchema, { Widget } from './widgets.model';

const { Schema } = DBService.connection;

export interface Screen extends Document {
    width: number;
    height: number;
    page?: number;
    title?: string;
    widgets: Widget[];
}

const ScreensSchema = new Schema({
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
    page: {
        type: Number
    },
    title: {
        type: String
    },
    widgets: [WidgetsSchema]
});

export default ScreensSchema;