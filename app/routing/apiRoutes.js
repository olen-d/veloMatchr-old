module.exports = (app) => {
    
    const fs = require("fs");
    const path = require("path");

    app.get("/api/friends", (req, res) => {
        res.sendFile(path.join(__dirname , "../data" , "friends.js"))
    });

    app.post("/api/friends", (req, res) => {
        // Get the incoming survey results
        const surveyRes = req.body;
        const surveyScores = surveyRes.scores.split(",");

        fs.readFile(path.join(__dirname , "../data" , "friends.js"), "utf-8", (err, data) => {
            if(err) { throw err; }

            let scores = new Map();
            let images = new Map();

            let diffs = [];

            let score = 0;

            dataJSON = JSON.parse("[" + data + "]");

            // Calculate the difference between the survey scores and the saved scores for each question
            for (let v of dataJSON) {
                diffs = surveyScores.map((w, i) => {
                    r = Math.abs(w - v.scores[i]);
                    return r;
                });

                // Calculate the total difference in scores
                score = diffs.reduce((a, c) => {
                    s = a + c;
                    return s;
                });

                // Save the name and score to the scores map
                // A map was used since its more convenient to loop through than an object
                scores.set(v.name, score);
                images.set(v.name, v.photo);
            }

            // Append the scores from the current survey to the file
            let appendData = {
                "name": surveyRes.name,
                "photo": surveyRes.photo,
                "scores": `[${surveyRes.scores}]`
            }

            fs.appendFile(path.join(__dirname , "../data" , "friends.js"), `,\n\r{"name": "${surveyRes.name}", "photo": "${surveyRes.photo}", "scores":[${surveyRes.scores}]}`, "utf-8", (err) => {
                if(err) { throw err; }
            });

            // Figure out the best match, i.e. the lowest score in the scores map
            let minKey = "";
            let minScore = Infinity;
            for (let [k, v] of scores) {
                if(v < minScore) {
                    minKey = k;
                    minScore = v;
                }
            }

            // Make the object for the name and photo of the best match to be pulled into the modal
            let matchData = {
                "name": minKey,
                "photo": images.get(minKey)
            }

            res.json(matchData); 
        });
    });
}