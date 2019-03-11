const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  // output: process.stdout
});

const server = net.createServer(socket => {
    rl.on('line', (input) => socket.write(input));
    socket.on('data', data => console.log(data.toString()))
})


server.listen(2020, () => console.log('server is running on port 2020'))


// const client = net.createConnection({ port: 8124 }, () => {
//   console.log('connected to server!');
//   client.write('world!\r\n');
// });

// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });

// client.on('end', () => {
//   console.log('disconnected from server');
// });