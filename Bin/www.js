require('dotenv').config();
const app = require("../src/Http/Bootstrap");
const config = require("../src/Infrastructure/Config");
const logger = require("../src/Infrastructure/Logger");

app.listen(config.server.port, function () {
  logger.info(`${config.application.name} app is listening on port ${config.server.port}`);
});