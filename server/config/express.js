const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const methodOverride = require('method-override');
const routes = require('../routes/v1');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
// const compress = require('compression');
// const { logs } = require('./vars');

/* Create Express Instance Here -->  REQUIRE instance in where SERVER 'LISTENS' */
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies??

const csrfProtection = csrf({
  cookie: true,
  //tells the middleware to use double submit cookie pattern
});

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());
app.use(cookieParser());
//will need to have some sort of way of getting it from the from on the context
// app.use(csrfProtection);
// enable CORS - Cross Origin Resource Sharing --> May need this?
// app.use(cors());



//App level Middleware
// app.use((req, res, next) => {
//   next();
// });
// mount api v1 routes
app.use('/api/v1', routes);

module.exports = app;
