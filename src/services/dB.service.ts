/* 3rd party libraries */
import mongoose, { Mongoose } from 'mongoose';
import { EventEmitter } from 'events';

/* Local libraries */
import ColoredString from '../helpers/coloredStrings';

class DBService extends EventEmitter {
    private URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

    constructor() {
        super();
    }

    get connection(): Mongoose {
        return mongoose;
    }

    private defineListeners(): void {
        mongoose.connection.on('error', (error: Error) => {
            this.emit('db-error', error);
        });
        
        mongoose.connection.on('disconnected', () => {
            this.emit('db-disconnected');
        });
    }

    async connect(): Promise<Mongoose> {
        try {
            this.defineListeners();
            await mongoose.connect(this.URI, { useNewUrlParser: true, useUnifiedTopology: true });

            return mongoose;
        } catch(error) {
            console.error(new ColoredString(`Could not connect to DB :/ ---> ${error.message}`).red());
            return null;
        }
    }
}

export default new DBService();