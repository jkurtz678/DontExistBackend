const http = require('http');
const app = require('./app');
const publicIp = require('public-ip');

const port = process.env.Port || 3000;
const server = http.createServer(app);

const myIp = "0.0.0.0";

server.listen(port, myIp, function() {
    console.log('listening to port: ' + port);
});
