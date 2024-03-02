require('dotenv').config();
const app = require("../Http/Bootstrap");
const config = require("../Infrastructure/Config");
const logger = require("../Infrastructure/Logger");

app.listen(config.server.port, function () {
  logger.info(`${config.application.name} app is listening on port ${config.server.port}`);
});