  
/* 3rd party libraries */
require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV || 'development'}` });
import passport from 'passport';
import morgan from 'morgan';
import express from "express";
import bodyParser from "body-parser";

/* Import middlewares */

/* Import routes */
import SolutionRoutes from './routes/solutions.route';

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

		console.log(new ColoredString('Server will start running soon :)').cyan());
		const app = express();
	
		const PORT = process.env.PORT;
	
		/* Set authentication */
		//passport.use(authentication);
	
		/* Body parser to read json */
		app.use(bodyParser.json());
	
		/* Express logger */
		app.use(morgan('combined'));
	
		/* Define routes */
		app.use("/solutions", SolutionRoutes);
	
		app.listen(PORT, () => {
			console.log(new ColoredString('Express server is up and running on port ' + PORT).green());
		});
	
		return app;
	} catch(error) {
		console.error(new ColoredString('Could not start server :/').red());
		process.exit(1);
	}
}

start();

process.on('SIGINT', async () => {
	//await InitController.signOutUser();
	process.exit(0);
});

process.on('SIGTERM', async () => {
	//await InitController.signOutUser();
	process.exit(0);
});