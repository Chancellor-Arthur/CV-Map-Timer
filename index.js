const express = require("express");
const path = require("path");
const PORT = process.env.PORT ?? 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('templates'));

app.use("/static", express.static(path.resolve("static")));

app.get("/", (req, res) => {
    res.render('cv', {'title': 'CV', 'active': 'cv'});
});

app.get("/map", (req, res) => {
    res.render('map', {'title': 'Map', 'active': 'map'});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
