const express = require('express');
const cors = require('cors');
const breedsRouter = require('./controllers/breeds');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use('/breeds', breedsRouter);

app.listen(PORT, () => {
    console.log("Welcome to CatHub :)");
})