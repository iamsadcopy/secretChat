<template>
  <div>
    <div v-if="!joined" class="parent-container">
      <Join
          v-on:chat-join="join"
      />
    </div>

    <div v-if="joined">
      <ChatList
          :messages="messages"
      />
      <ChatInput
          v-on:send-message="sendMessage"
      />
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";
import Join from "@/components/Chat/Join";
import ChatInput from "@/components/Chat/ChatInput";
import ChatList from "@/components/Chat/ChatList";

export default {
  data() {
    return {
      joined: false,
      currentUser: "",
      text: "",
      messages: [],
    }
  },
  methods: {
    join(data) {
      this.joined = true;
      this.currentUser = data.currentUser;

      this.socketInstance = io("http://localhost:3000");

      this.socketInstance.on(
          "message:received", (data) => {
            this.messages = this.messages.concat(data)
          }
      )
    },

    sendMessage(data) {
      this.text = data.text;
      this.addMessage();
    },

    addMessage() {
      const message = {
        id: new Date().getTime(),
        text: this.text,
        user: this.currentUser
      };

      this.messages = this.messages.concat(message);
      this.socketInstance.emit("message", message);
    }
  },
  components: {
    Join, ChatInput, ChatList
  },
  name: "ChatApp"
}
</script>

<style scoped>
.parent-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  padding-top: 150px;
}

</style>