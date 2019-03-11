const dgram = require('dgram');
const readline = require('readline');



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const type = 'udp4';
const socket = dgram.createSocket(type);


socket.on('error', (err) => {
  console.log(`socket error:\n${err.stack}`);
  socket.close();
});

socket.on('message', (msg, rinfo) => {
  console.log(`socket got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});


socket.on('listening', () => {
  const address = socket.address();
  console.log(`socket listening ${address.address}:${address.port}`);
});

rl.on('line', (input) => {
    socket.send(input, 2323, '192.168.31.217')
})

socket.bind(2323);