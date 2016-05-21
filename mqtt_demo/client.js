var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://localhost:3000', {username: 'xx', password: 'xx'});

client.on('connect', function () {

  //订阅
  client.subscribe('s1');
  client.subscribe(['s2', 's3']);
  client.subscribe({ s4: 0, s5: 1 });
  client.subscribe('s6', { qos: 1 }); //qos default is 0
  client.subscribe('test/abc', (err, granted) => {
    if (err) {
      return console.error(err);
    }
    console.log(granted); //granted is an Array,exp: [{topic: 'xx', qos: 0}]
  });

  //取消订阅
  client.unsubscribe('s1');
  client.unsubscribe(['s3', 's4']);
  client.unsubscribe('s6', () => {
    console.log('unsubscribe s6');
  });

  //发布
  client.publish('test/abc', 'test');
  // client.publish('s7', 'test 1', {
  //   qos: 0, //default 0
  //   retain: true //default false
  // });
  // client.publish('s7', 'test 2', (err) => {
  //   if(err){
  //     return console.error('publish failed.');
  //   }
  //   console.log('publish');
  // });
});

client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(topic, message.toString());
//  client.end(true);
});

client.on('connect', (connack) => {
  console.log('Event:connect', connack);
});

client.on('reconnect', () => {
  console.log('Event:reconnect');
});

client.on('close', (err) => {
  console.log('Event:close', err);
});

client.on('error', (err) => {
  console.log('Event:error', err);
});

client.on('offline', () => {
  console.log('Event:offline');
});