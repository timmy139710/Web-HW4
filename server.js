var express = require('express');
var socket = require('socket.io');

var app = express();

server = app.listen(8080, function(){
  console.log('Server is running on port 8080');
});

io = socket(server);

const TOTAL_USER = 4;
const SEND = 0;
const RECEIVE = 1;

var dataBase = [];
for (let i = 0; i < TOTAL_USER*TOTAL_USER; ++i)
  dataBase[i] = [];

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data) {
    // add database 'RECEIVE'
    console.log(data);
    receive_index = (data.storage%TOTAL_USER) * TOTAL_USER + Math.floor(data.storage/TOTAL_USER);
    message = { direct: RECEIVE, message: data.message };
    dataBase[receive_index].push(message);

    //send data to client
    message.id = receive_index;
    io.emit('RECEIVE_MESSAGE', message);

    // add database 'SEND'
    message = { direct: SEND, message: data.message };
    dataBase[data.storage].push(message);

    // send data to client
    message.id = data.storage;
    io.emit('RECEIVE_MESSAGE', message);
  });

  socket.on('GET_MESSAGE', function(index) {
    // send data to client
    chat = { id: index, messages: dataBase[index] }
    io.emit('THROW_MESSAGE', chat);
  });
});
