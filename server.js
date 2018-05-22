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

var mydataBase = [];
for (let i = 0; i < TOTAL_USER; ++i){
  mydataBase[i] = [];
}
for(let i = 0; i < TOTAL_USER; ++i){
  for(let j = 0; j < TOTAL_USER; ++j){
    mydataBase[i][j] = [];
  }
}
console.log(mydataBase);

io.on('connection', (socket) => {
  console.log(socket.id);


  socket.on('MY_SEND_MESSAGE', function(data) {
    console.log(data);

    //add to receive
    message = { direct: RECEIVE, message: data.message};
    receiver = data.contact;
    sender = data.user;
    mydataBase[data.contact][data.user].push(message);

    //send data to client
    message.user = receiver;
    message.contact = sender;
    io.emit('MY_RECEIVE_MESSAGE', message);

    //add to send
    message = { direct: SEND, message: data.message};
    receiver = data.user;
    sender = data.contact;
    mydataBase[data.user][data.contact].push(message);

    //send data to client
    message.user = receiver;
    message.contact = sender;
    io.emit('MY_RECEIVE_MESSAGE', message);
  });

  socket.on('MY_GET_MESSAGE', function(index){
    data = { user: index.user, contact: index.contact, messages: mydataBase[index.user][index.contact] }
    io.emit('MY_RENDER_MESSAGE', data);
  })

});
