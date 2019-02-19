const express = require("express");
const app = express();
const port = 3000;

// Set up the css, js, and images directories
app.use(express.static("app/public"));
// app.use(express.static("js"));
// app.use(express.static("images"));

const apiRoutes = require("./app/routing/apiRoutes")(app);
const htmlRoutes = require("./app/routing/htmlRoutes")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));