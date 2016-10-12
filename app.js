//http
// var http = require('http');
// var url = require('url');
// var util = require('util');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);


//net
var net = require('net');

//创建TCP服务器
var server = net.createServer(function (connection) {
    console.log('client connected');
    //客户端关闭连接
    connection.on('end', function () {
        console.log('客户端关闭了连接');
    });

    connection.write('Hello World\r\n');
    // connection.end();
    //管道
    connection.pipe(connection);

});

server.listen(9000, function () {
    console.log('server is listening');
})