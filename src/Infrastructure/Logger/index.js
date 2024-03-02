const bunyan = require('bunyan');
const config = require("../Config/index");

const logger = bunyan.createLogger({name: config.application.name});
module.exports = logger