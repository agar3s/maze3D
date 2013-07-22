var connect = require('connect');
connect.createServer(
    connect.static('../maze3D')
).listen(8080);