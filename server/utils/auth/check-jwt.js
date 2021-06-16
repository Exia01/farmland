const jwt = require('express-jwt');
const checkJwt = jwt({
  secret: process.env.TOKEN_SECRET,
  //here we define the token for a different 'api' from-to essentially
  // issuer: 'api.farmland',
  // audience: 'api.farmland',
  algorithms: ['HS256'],
  getToken: function (req) {
    return req.cookies.token;
  },
});

module.exports = {
  checkJwt,
};
