const fs = require("fs");
const path = require("path");
const filePath = "../db/db.json";
const db = JSON.parse(fs.readFileSync(path.join(__dirname, filePath), "utf8"));

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        res.sendFile(path.join(__dirname, filePath));
    });

    app.post("/api/notes", (req, res) => {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: Date.now()
        };
        db.push(newNote);
        fs.writeFileSync(path.join(__dirname, filePath), JSON.stringify(db), "utf8");
        res.sendFile(path.join(__dirname, filePath));
    });

    app.delete("/api/notes:id", (req, res) => {
        let identifier = req.params.id;
        db.splice(db.findIndex(x => x.id == identifier), 1);
        fs.writeFileSync(path.join(__dirname, filePath), JSON.stringify(db), "utf8");
        res.sendFile(path.join(__dirname, filePath));
    });
};