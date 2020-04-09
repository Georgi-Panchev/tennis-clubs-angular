// express
const express = require('express');
const app = express();
const port = 8000;
app.listen(port,() => {
    console.log(`Rest Api listening on port: ${port}...`);
});

// database
require('./database/database')();

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//routes
const userRoutes = require('./routes/user');
const clubRoutes = require('./routes/club');
const tournamentRoutes = require('./routes/tournament');
app.use('/user', userRoutes);
app.use('/club', clubRoutes);
app.use('/tournament', tournamentRoutes);

// error
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status)
        .json({ message: message });
    next();
});


