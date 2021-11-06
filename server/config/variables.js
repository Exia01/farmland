const path = require('path');
// require('dotenv').config()

// import .env variables
require('dotenv-safe').config({
  path: path.join(__dirname, '../../.env'),
  // sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri: process.env.MONGO_URI,
  },
  audience: process.env.AUTH0_AUDIENCE,
  domain: process.env.AUTH0_DOMAIN,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev', //here be dragons
};

// Alternative:https://github.com/motdotla/dotenv

/* 
Could also be done as below:
const audience = process.env.AUTH0_AUDIENCE;
const domain = process.env.AUTH0_DOMAIN;
const serverPort = process.env.SERVER_PORT;
const clientOriginUrl = process.env.CLIENT_ORIGIN_URL

module.exports = {
  audience,
  domain,
  serverPort,
  clientOriginUrl,
  clientOrigins,
};

*/
