const express = require('express');
const HealthController = require("../../Controller/Health");
const router = express.Router();
const healthController = new HealthController();

router.get('/', healthController.healthIsGood);

module.exports = router;