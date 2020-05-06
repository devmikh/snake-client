const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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