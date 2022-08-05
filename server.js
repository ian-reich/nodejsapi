const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse appclication json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Panggil Routes 
var routes = require('./routes');
routes(app);
app.listen(666, () => {
    console.log(`Server started on port`);
});