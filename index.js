//MutluhanB 11/2019
var express = require('express')
var app = express()


var server = app.listen(4000,()=>{
	console.log("listening on 4000")
})


var io = require('socket.io').listen(server);

app.use(express.static('public'))

io.on('connection', (socket) => {
	console.log('new connection has been made ' + socket.id)
	
	socket.on('chatmessage', (data)=>{
		console.log(data);
		io.emit('chatmessage', data)
	})

	socket.on('typing', (data)=>{
		socket.broadcast.emit('typing',data)
		console.log("typinh emiited")
	})
})

app.use(express.static('public'))