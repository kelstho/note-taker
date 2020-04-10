const fs = require("fs");
const path = require("path");

const db = JSON.parse(fs.readFileSync("db/db.json", "utf8", (err) => {
    if (err) {
        console.log(err);
    }
}));

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        res.json(db);
    });

    app.post("/api/notes", (req, res) => {
        const read = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");

        const note = {
            title: req.body.title,
            text: req.body.text,
            id: Date.now()
        };
        console.log(note);
        const p = JSON.parse(read);

        p.push(note);
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(p), "utf8");
        res.json(db);
    });
};