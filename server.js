const express = require('express');
const bodyParser = require('body-parser');
var morgan = require('morgan');
const app = express();

// parse appclication json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Panggil Routes 
var routes = require('./routes');
routes(app);

// Panggill Routes Index JS (Register)
app.use('./auth', require('./middlewere'));

app.listen(666, () => {
    console.log(`Server started on port`);
});