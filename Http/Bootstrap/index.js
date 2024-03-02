const express = require('express');
const app = express();

const HealthRoute = require("../Routes/Health");
const FormRoute = require("../Routes/Api/V1/Form");

app.use("/", HealthRoute);
app.use("/api/v1/form",FormRoute)

module.exports = app;