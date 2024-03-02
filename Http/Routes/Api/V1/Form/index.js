const express = require('express');
const FormController = require("../../../../Controller/Api/V1/Form");
const router = express.Router();
const FilloutService = require("../../../../../Infrastructure/Services/FilloutService");
const filloutService = new FilloutService();
const formController = new FormController(filloutService);

router.get('/:formId/filteredResponses', formController.filteredResponses);

module.exports = router;