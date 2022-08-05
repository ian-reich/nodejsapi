const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse appclication json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(666, () => {
    console.log(`Server started on port`);
});