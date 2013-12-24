var express = require('express');
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var url = require('url');
var path = require('path');

server.listen(process.env.PORT || 3030);

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.static('client'));
});

//Socket connections
io.sockets.on('connection', function (socket) {
  socket.on('update', function(){
    io.sockets.emit('update');
  });
  socket.on('pay', function(){
    io.sockets.emit('play');
  });
  socket.on('chat', function(){
    io.sockets.emit('chat');
  });
});

// Static files
app.get('/', function (req, res) {
  res.sendfile(url.resolve(__dirname, './client/index.html'));
});