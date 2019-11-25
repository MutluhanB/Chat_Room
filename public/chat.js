var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message'),
	handle = document.getElementById('handle'),
	button = document.getElementById('send'),
	output = document.getElementById('output'),
	feedback = document.getElementById('feedback')


button.addEventListener('click',function(){
	socket.emit('chatmessage',{
		message: message.value,
		handle: handle.value,
	})
})

message.addEventListener('keyup',function(){
	socket.emit('typing', handle.value)
})


socket.on('chatmessage', function(data){
	console.log("message received")
	output.innerHTML += "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>"
})

socket.on('typing', function(data){
	feedback.innerHTML = "<p><em>" + data + " is typing..." + "</em></p>"
	console.log("someone is typing")
})