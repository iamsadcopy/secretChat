const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || "3000";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`user ${socket.id} is connected.`)

    socket.on("message", data => {
        socket.broadcast.emit("message:received", data)
    })

    socket.on("disconnect", () => {
        console.log(`user ${socket.id} is left.`)
    })
})

server.listen(PORT, () => {
    console.log(`Server start at port ${PORT}`)
})