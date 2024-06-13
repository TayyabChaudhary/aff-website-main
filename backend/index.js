const express = require('express');

const database = require('./config/database_connection');

var cors = require('cors')

const bodyParser = require('body-parser');

const routes = require('./routes/routes');

const app = express()

const port = process.env.SERVER_PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use('/api', routes);

app.use(express.urlencoded({ extended: true }));

database();


app.listen(port, () => {
    console.log(`Aff-website app Server listening on port http://localhost:${port}`)
})