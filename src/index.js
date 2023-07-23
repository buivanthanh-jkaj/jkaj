const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const { JSDOM } = require("jsdom");
const dom = new JSDOM("<html><head></head><body></body></html>");

app.use(express.static(path.join(__dirname, "public")));

// template engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/home_page", (req, res) => {
    res.render("home");
});

app.use(morgan("combined"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
