const express = require("express");
const path = require("path");
const PORT = process.env.PORT ?? 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('templates'));

app.get("/", (req, res) => {
    res.render('cv', {'title': 'Резюме', 'active': 'cv'});
});

app.get("/map", (req, res) => {
    res.render('map', {'title': 'Карта', 'active': 'map'});
});

app.get("/timer", (req, res) => {
    res.render('timer', {'title': 'Таймер', 'active': 'timer'});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
