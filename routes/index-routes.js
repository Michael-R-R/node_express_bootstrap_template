const path = require("path");
const express = require("express");
const routes = express.Router();
const controller = require(path.join(__dirname, "..", "controllers", "index-controller"));

// Index
routes.get("/", controller.indexGET);

module.exports = routes;
