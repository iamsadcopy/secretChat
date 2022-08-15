const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const messageRouter = require("./routes/messages.route");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || "3000";
const DB_NAME = process.env.DB_NAME || "messages";
const DB_URL = process.env.DB_UL || `mongodb://localhost:27017/${DB_NAME}`;

const app = express();
app.use(cors({
    origin: "http://localhost:8080"
}))
app.use(express.json());
app.use("/api/secret", messageRouter)

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

async function startApp() {
    try {
        await mongoose.connect(
            DB_URL,
            { useNewUrlParser: true},
            { useUnifiedTopology: true}
        );
        server.listen(PORT, () => console.log(`Server start at port: ${PORT}`));
    } catch(e) {
        console.log(e);
    }
}

startApp().then(() => {
    console.log("App start")
})
.catch((e) => console.log(e));