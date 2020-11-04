# Sr NodeJs Test

This project was built with node version ``12.16.1`` and requires ES6 syntax support.

## To initialize

You can install the dependencies for this project with the following command:

```
    $> npm install
```

## To run

At this point you'll be able to run this project with the following command:

```
    $> npm start
```

Which does run this:

```
    $> npm run compile && node ./dist/index.js
```

## To run in Docker 
  Start : docker-compose up -d;
  Stop: docker-compose down;
  Logs: docker logs -f <container_name>;

## To config

You need to add a config file to stablish your DB options on ``/config/`` folder. There's an example of file called ``.env``, but you must create at least 2 more in order to avoid problems. You should create the following files:

* ``.env.development``
* ``.env.test``

Use the same variables in ``.env`` file and just replace the values by your values.

## To test

By running the following command:

```
    $> npm test
```