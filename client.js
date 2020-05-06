const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '50.64.116.162',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MS");
  });

  conn.on('data', (message) => {
    console.log('Message from server:', message);
  });

  return conn;
};

module.exports = { connect };