module.exports = (app) => {
    
    const path = require("path");

    app.get("/api/friends", (req, res) => {
        res.sendFile(path.join(__dirname , "../data" , "friends.js"))
    });

    app.post("/api/friends", (req, res) => {
        res.sendFile(path.join(__dirname + "../data", "friends.js"))
    });
}