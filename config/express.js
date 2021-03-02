const express = require('express');
// const morgan = require('morgan');
// const compress = require('compression');
const methodOverride = require('method-override');
// const cors = require('cors');
// const helmet = require('helmet');
// const routes = require('../api/routes/v1');
// const { logs } = require('./vars');
const error = require('../middleware/error');

/*Express instance*/
const app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies??

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// enable CORS - Cross Origin Resource Sharing --> May need this?
// app.use(cors());

// mount api v1 routes
// app.use('/v1', routes);

// catch 404 and forward to error handler
app.use(error.notFound);

module.exports = app;
// Method override:https://www.npmjs.com/package/method-override
//  express json: https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
