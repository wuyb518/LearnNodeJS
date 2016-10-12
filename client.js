var net=require('net');
var client=net.connect({port:9000},function(){
    console.log('连接到服务器');
});
client.on('end',function(){
    console.log('与服务器断开连接');
});
client.on('data',function(data){
    console.log(data.toString());
    client.end();
});
