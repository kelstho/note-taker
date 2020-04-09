const fs = require("fs");
const database = "db/db.json";

let db = JSON.parse(fs.readFileSync(database, 'utf8', function (err) {
    if (err) {
        console.log(err);
    }
}));

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

};