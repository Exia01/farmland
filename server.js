const { port, env } = require('./config/variables');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

// open mongoose connection
mongoose.connect();

// listen to requests
app.listen(port, () => console.log(`Server started on port ${port} ${env}`));

/**
 * Exports express
 * @public
 */
module.exports = app;
