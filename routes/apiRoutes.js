const fs = require("fs");
const path = require("path");


module.exports = (app) => {
    const filePath = "../db/db.json";
    app.get("/api/notes", (req, res) => {
        res.sendFile(path.join(__dirname, filePath));
    });

    app.post("/api/notes", (req, res) => {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: Date.now()
        };

        const db = JSON.parse(fs.readFileSync(path.join(__dirname, filePath), "utf8"));

        db.push(newNote);
        fs.writeFileSync(path.join(__dirname, filePath), JSON.stringify(db), "utf8");
        console.log(db);
        res.sendFile(path.join(__dirname, filePath));
    });
};