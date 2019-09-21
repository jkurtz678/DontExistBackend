const express = require('express');
const app = express();
const morgan = require('morgan');
//morgan?
//bodyParser?
//mongoose?
//
//routes?
//
const slideRoutes = require('./api/routes/slides');

app.use(morgan('dev'));
app.use(express.static('data/audio'));
app.use(express.static('data/img'));

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if( req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/slides', slideRoutes);

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
