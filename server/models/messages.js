const Message = require("./Message.js");
const uuid = require("uuid");

const {
    encrypt,
    decrypt } = require("../src/encryption/encryption")

async function getAllMessages() {
    try {
        let messages = await Message.find();
        return messages
    } catch (error) {
        return error.message;
    }
}

async function createMessage(message) {
    try {
        let messageToCreate = new Message({
            hash: uuid.v4(),
            content: encrypt(message),
        })

        await messageToCreate.save();
        return messageToCreate;

    } catch (err) {
        return err.message
    }
}

async function getMessage(id){
    try {
        let message = await Message.findOne({hash: id});
        console.log(message)
        return decrypt(message["content"]);
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    getAllMessages,
    createMessage,
    getMessage
}