const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema =  new Schema(
    {
        hash: String,
        content: String,
    }
)

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;