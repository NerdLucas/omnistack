const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/* 
    query params: /users/?name=Lucas
    route params: /users/:id
    request body: /users
*/

module.exports = app;

