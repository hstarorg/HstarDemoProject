var thrift = require('thrift');
var ThriftTest = require('./gen-nodejs/ThriftTest');
var ttypes = require('./gen-nodejs/1_types');

transport = thrift.TBufferedTransport()
protocol = thrift.TBinaryProtocol()

var connection = thrift.createConnection("localhost", 7410, {
  transport : transport,
  protocol : protocol
});

connection.on('error', function(err) {
  console.log(false, err);
});

var client = thrift.createClient(ThriftTest, connection);

var sum = client.plus(1, 1, function(err, result){
  //connection.end(); //如果不关闭连接，那么强制断开连接，将会导致后端出现error
  if(err){
    console.log(err);
    return;
  }
  console.log(result);
});