const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const methodOverride = require('method-override');
const routes = require('../routes/v1');
// const compress = require('compression');
// const { logs } = require('./vars');

/* Create Express Instance Here -->  REQUIRE instance in where SERVER 'LISTENS' */
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies??

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// enable CORS - Cross Origin Resource Sharing --> May need this?
// app.use(cors());

// mount api v1 routes
app.use('/v1', routes);

module.exports = app;
