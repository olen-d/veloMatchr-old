const express = require("express");
const app = express();
const port = 3000;



const apiRoutes = require("./app/routing/apiRoutes")(app);
const htmlRoutes = require("./app/routing/htmlRoutes")(app);


//app.use("/",htmlRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

