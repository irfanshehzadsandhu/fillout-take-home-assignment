const server = require("./server");
const application = require("./application");
const fillout = require("./fillout")
const config = {
  server: server,
  application: application,
  fillout: fillout
}
module.exports = config;