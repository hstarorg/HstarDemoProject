var thrift = require('thrift');

var ThriftTest = require("./gen-nodejs/ThriftTest");
var ttypes = require("./gen-nodejs/1_types");


var nodeServer = thrift.createServer(ThriftTest, {
  //完成具体的事情
  plus: function(n1, n2, callback){
    console.log(`server request, n1 = ${n1}, n2 = ${n2}.`);
    callback(null, n1 + n2);
  }
});

//处理错误，假设不处理，如果客户端强制断开连接，会导致后端程序挂掉
nodeServer.on('error', function(err){
  console.log(err);
});

nodeServer.listen(7410);
console.log('node server started... port: 7410');

//如果client的浏览器，通信采用http的时候，需要创建http server
var httpServer = thrift.createWebServer({
  cors: {'*': true}, //配置跨域访问
  services: {
    '/thrift': { //配置路径映射
      transport: thrift.TBufferedTransport,
      protocol: thrift.TJSONProtocol,
      processor: ThriftTest,
      handler: { //具体的处理对象
        plus: function(n1, n2, callback) {
          console.log(`http request, n1 = ${n1}, n2 = ${n2}.`);
          callback(null, n1 + n2);
        }
      }
    }
  }
});

httpServer.on('error', function(err) {
  console.log(err);
});

httpServer.listen(7411);
console.log('http server started... port: 7411');
