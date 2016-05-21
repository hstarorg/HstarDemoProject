var mosca = require('mosca');

var auth = new mosca.Authorizer();

var memoryPersistence = new mosca.persistence.Memory();

var settings = {
  port: 3000,
  persistence: memoryPersistence
};

// settings = {
//   http: {
//     port: 3000,
//     bundle: true
//   }
// };

//模拟数据库
var users = [{
  userId: 1,
  username: 'xx',
  password: 'xx',
  publishTopics: ['abc', 'abc/e'],
  subscribeTopics: ['abc', 'test']
}];

var userMap = new Map();


var authenticate = function (client, username, password, callback) {
  var user = users.find(x => x.username === username.toString() && x.password === password.toString());
  if (!user) {
    return callback('User not found.', false);
  }
  userMap.set(client.id, {
    userId: user.userId,
    publishTopics: user.publishTopics,
    subscribeTopics: user.subscribeTopics
  });
  callback(null, true);
};

var authorizePublish = function (client, topic, payload, callback) {
  console.log('authorizePublish', client.id);
  var user = userMap.get(client.id);
  if(!user){
    return callback('User invalid', false);
  }
  if(user.publishTopics.indexOf(topic) < 0){
    return callback('Can\'t publish topic: ' + topic, false);
  }
  callback(null, true);
};

auth.addUser('xx', 'xx', 'test\/*', 'test\/*', function (err) {
  console.log(err, 'abc');
});

var authorizeSubscribe = function (client, topic, callback) {
  // console.log('authorizeSubscribe', client);
  callback(null, true);
};

var server = new mosca.Server(settings, (err, event) => {
  if (err) {
    return console.error(err);
  }
  console.log('Mqtt server started.');
});

server.on('ready', () => {
  console.log('server is ready');
  server.authenticate = authenticate;
  server.authorizePublish = authorizePublish;
  server.authorizeSubscribe = authorizeSubscribe;
  // server.authenticate = auth.authenticate; //  authenticate;
  // server.authorizePublish = auth.authorizePublish; // authorizePublish;
  // server.authorizeSubscribe = auth.authorizeSubscribe; // authorizeSubscribe;
});

server.on("error", function (err) {
  console.error('error', err);
});

server.on('clientConnected', function (client) {
  console.log('Client Connected \t:= ', client.id);
});

server.on('clientDisconnecting', function (client) {
  console.log('clientDisconnecting := ', client.id);
});

server.on('clientDisconnected', function (client) {
  console.log('Client Disconnected \t:= ', client.id);
});

server.on('publish', function () {
  console.error('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
});

server.on('published', function (packet, client) {
  // console.log("Published :=", packet);
});

server.on('subscribed', function (topic, client) {
  //  console.log("Subscribed :=", client.packet);
});

server.on('unsubscribed', function (topic, client) {
  //console.log('unsubscribed := ', topic);
});



