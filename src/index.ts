  
/* 3rd party libraries */
require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV || 'development'}` });
import passport from 'passport';
import morgan from 'morgan';
import express from "express";
import bodyParser from "body-parser";

/* Import middlewares */
import Authentication from './middlewares/authentication.middleware';

/* Import routes */
import SolutionRoutes from './routes/solutions.route';
import ScreenRoutes from './routes/screens.route';
import WidgetsRoutes from './routes/widgets.routes';
import UsersRoutes from './routes/users.route';

/* Import services */
import DBService from './services/dB.service';

/* Local libraries */
import ColoredString from './helpers/coloredStrings';

DBService.on('db-error', (error: Error) => {
	console.error(new ColoredString(error.message).red());
});

DBService.on('db-disconnected', () => {
	console.log(new ColoredString('Disconnected from DB :O').yellow());
});

async function start(): Promise<unknown> {
	try {
		console.log(new ColoredString('Starting DB connection').cyan());

		if (!(await DBService.connect())) process.exit(1);

		console.log(new ColoredString('Connected to DB :)').green());

		console.log(new ColoredString('Server will start running soon').cyan());
		const app = express();
	
		const PORT = process.env.PORT;
	
		/* Set authentication */
		passport.use(Authentication);
	
		/* Body parser to read json */
		app.use(bodyParser.json());
	
		/* Express logger */
		app.use(morgan('combined'));
	
		/* Define routes */
		app.use("/users", UsersRoutes);
		app.use("/solutions", SolutionRoutes);
		app.use("/screens", ScreenRoutes);
		app.use("/widgets", WidgetsRoutes);
	
		app.listen(PORT, () => {
			console.log(new ColoredString(`Express server is up and running on port ${PORT} :)`).green());
		});
	
		return app;
	} catch(error) {
		console.error(new ColoredString('Could not start server :/').red());
		process.exit(1);
	}
}

start();