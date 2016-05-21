var mqtt = require('mqtt');

var client = mqtt.connect('mqtt://localhost:3000', {username: 'xxx', password: 'xxx'});

client.on('connect', function () {

  //订阅
  client.subscribe('s1/+');

  //发布
  client.publish('s1', 's1');
  client.publish('s2', 's2');
  client.publish('s1/a', 's1/a', {
    qos: 0, //default 0
    retain: true //default false
  });
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

client.on('close', () => {
  console.log('Event:close');
});

client.on('error', () => {
  console.log('Event:error');
});

client.on('offline', () => {
  console.log('Event:offline');
});