const express = require("express");
const {
    httpGetMessage,
    httpCreateMessage,
    httpGetAllMessages
} = require("./messages.controller");

const messageRouter = express.Router();

messageRouter.get("/", httpGetAllMessages);
messageRouter.post("/", httpCreateMessage);
messageRouter.get("/:id", httpGetMessage);

module.exports = messageRouter;