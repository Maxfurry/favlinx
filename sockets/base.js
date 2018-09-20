module.exports = function (io) {
  io.on("connection", (socket) =>{
    // Global variables 
    let roomname;
    let broadcaster;
    let users = [];

    // Handle Room Event
    console.log("Made socket connection",socket.id);
    socket.on('createRoom', (room) => {
      socket.join(room);
      roomname = room;
      console.log('The name of the room is '+room);
    });

    // Handle Chat Event
    socket.on('message', (data) =>{
        // console.log(data);
        io.to(roomname).emit('newMessage', data);
    });
    
    // Handle Typing Event
    socket.on('typing', (data)=>{
        socket.broadcast.to(roomname).emit('typing', data);
    });

    // Handles Broadcast Event
    socket.on('broadcaster', function () {
      broadcaster = socket.id;
      socket.broadcast.to(roomname).emit('broadcaster');
    });

    socket.on('watcher', function () {
      io.to(roomname).emit('watcher', socket.id);
    });

    socket.on('offer', function (id /* of the watcher */, message) {
      io.to(id).emit('offer', socket.id /* of the broadcaster */, message);
    });

    socket.on('answer', function (id /* of the broadcaster */, message) {
      io.to(id).emit('answer', socket.id /* of the watcher */, message);
    });

    socket.on('candidate', function (id, message) {
      io.to(id).emit('candidate', socket.id, message);
    });

    socket.on('disconnect', function() {
      socket.to(roomname).emit('bye', socket.id);
    });
  });  
};