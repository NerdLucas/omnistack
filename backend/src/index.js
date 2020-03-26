const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* 
    query params: /users/?name=Lucas
    route params: /users/:id
    request body: /users
*/

app.listen(3333);

