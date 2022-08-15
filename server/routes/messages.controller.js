const {
    getAllMessages,
    createMessage,
    getMessage
} = require("../models/messages")

async function httpGetAllMessages(req, res) {
    res.status(200).json(await getAllMessages());
}

async function httpCreateMessage(req, res) {
    const message = req.body.message;
    if(message) {
        res.status(200).json(await createMessage(message));
    } else {
        res.status(400).json({message: "Message is empty"});
    }

}

async function httpGetMessage(req, res) {
    const id = req.params.id;
    res.status(200).json(await getMessage(id));
}

module.exports = {
    httpGetAllMessages,
    httpCreateMessage,
    httpGetMessage,
}