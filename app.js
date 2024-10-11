const path = require("path");
const express = require("express");
require("dotenv").config();

// Define variables
const app = express();
const indexRoutes = require(path.join(__dirname, "routes", "index-routes"));

// Configure app
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules", "bootstrap", "dist")));

// Setup routes
app.use("/", indexRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
