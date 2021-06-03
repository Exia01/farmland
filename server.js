const { port, env } = require('./server/config/variables');
const app = require('./server/config/express');
const mongoose = require('./server/config/mongoose');
const logger = require('./server/config/logger');
const testCall = require('./server/utils/testAxiosCalls');

// open mongoose connection
mongoose.connect();

// listen to requests
// app.listen(port, () => console.log(`Server started on port ${port} ${env}`));

// listen to requests

app.listen(port, () => logger.info(`server started on port ${port} (${env})`));
/**
 * Exports express
 * @public
 */

module.exports = app;


// No need for bluebird:https://masteringjs.io/tutorials/fundamentals/bluebird