const express = require("express");
const bodyparser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 4000;
const app = express();

// let's set up some basic middleware for our express app
// logs requests to the console. not necessary to make passport work, but useful
app.use(morgan('dev'));
// Use body-parser for reading form submissions into objects
app.use(bodyparser.urlencoded({ extended: true }));
// Use body-parser for reading application/json into objects
app.use(bodyparser.json());


// configure using our exported passport function.
// we need to pass the express app we want configured!
// order is important! you need to set up passport
// before you start using it in your routes.
require('./middleware/passport')(app);

// use the routes we configured.
app.use(require('./routes'));


// configure mongoose
require('./middleware/mongoose')()
    .then(() => {
        // mongo is connected, so now we can start the express server.
        app.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));
    })
    .catch(err => {
        // an error occurred connecting to mongo!
        // log the error and exit
        console.error('Unable to connect to mongo.')
        console.error(err);
    });
