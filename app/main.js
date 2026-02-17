const net = require("net");

// Debug print
console.log("Logs from your program will appear here!");

// Minimal TCP server
const server = net.createServer((socket) => {
  console.log("Client connected");

  // Handle client closing connection
  socket.on("close", () => {
    console.log("Client disconnected");
    socket.end();
  });

  // Optional: log any data received
  socket.on("data", (data) => {
    console.log("Received data:\n", data.toString());
  });
});

// Listen on port 4221
server.listen(4221, "localhost", () => {
  console.log("Server listening on localhost:4221");
});
