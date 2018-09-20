// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

//Make Connection
const socket = io();
socket.on('connect', () => {
    console.log('The name of the room is '+room);
    socket.emit('createRoom', room);
});

// Emit Events
btn.addEventListener('click', ()=>{
    socket.emit('message', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

message.addEventListener('keypress', ()=>{
    socket.emit('typing', handle.value);
})

// Listen For Events
socket.on('newMessage', (data)=>{
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', (data)=>{
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});