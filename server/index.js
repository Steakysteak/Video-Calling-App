const { Server } = require("socket.io");

const io = new Server(8000, {
  cors: true,
});

const emailToSocketIdMap = new Map();
const socketIdToMap = new Map()

io.on("connection", (socket) => {
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id)
    socketIdToMap.set(socket.id, email)
    socket.to('room:join', data)
  });
});
