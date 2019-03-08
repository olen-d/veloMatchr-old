const express = require("express");
const app = express();
const port =  process.env.PORT || 3060;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up the css, js, and images directories
app.use(express.static("app/public"));

const apiRoutes = require("./app/routing/apiRoutes")(app);
const htmlRoutes = require("./app/routing/htmlRoutes")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const db = require("./models/velomatchr.js");