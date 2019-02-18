module.exports = (app) => {

    const path = require("path");

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "home.html"))
    });

    app.get("/home", (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "home.html"))
    });
    
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "survey.html"))
    });

    app.use((req, res) => {
        res.sendFile(path.join(__dirname , "../public" , "404.html"))
    });
}