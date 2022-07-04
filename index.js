import express from 'express'
import path from 'path'
import serverRoutes from "./manage/routes/server.js";

const PORT = process.env.PORT ?? 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('templates'));

app.use(express.static(path.resolve('templates')));
app.use(serverRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));