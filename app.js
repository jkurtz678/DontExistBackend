const express = require('express');
const app = express();
//morgan?
//bodyParser?
//mongoose?
//
//routes?
//

app.use((req, res, next) => {
   res.header('Acess-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if( req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    const error = new Error('Endpoint not found');
    error.status = 404;
    next(error);
});

app.use(( error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
