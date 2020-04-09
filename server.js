let express = require("express");
let app = express();

let PORT = process.env.PORT || 8080;

//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});