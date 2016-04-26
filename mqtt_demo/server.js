var mosca = require('mosca');

var memoryPersistence = new mosca.persistence.Memory();

var settings = {
  port: 7410,
  persistence: memoryPersistence
};

var authenticate = function (client, username, password, callback) {
  console.log('authenticate', username, password.toString());
  if (username == "xxx" && password.toString() == "xxx")
    callback(null, true);
  else
    callback(null, false);
};

var authorizePublish = function (client, topic, payload, callback) {
 // console.log('authorizePublish', client);
  callback(null, true);
};

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



