import Primus from 'primus';
import http from 'http';

let server = http.createServer();
let primus = new Primus(server, { transformer: 'uws' });

primus.on('error', function error(err) {
  console.error('ERROR', err.stack);
});

primus.on('connection', function(socket) {
  socket.on('data', function ping(message) {
    console.log('recieved a new message', message);
    socket.write({ data: `this is the response to: ${message}` });
  });
});

server.listen(8081);
console.log('server listening on 8081');
