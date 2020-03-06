const logger = require('./logApp/logger');
const http = require('http');

//logger.logMsg("Hi");
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write("Hello world App");
        res.end();
    }
});

server.listen(3000);
