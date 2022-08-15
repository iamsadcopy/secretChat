<template>
  <div class="text-input-container">
          <textarea
              v-model="text"
              class="text-message"
              v-on:keyup.enter="sendMessage"
          ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    }
  },
  methods: {
    sendMessage() {
      this.$emit("send-message", {
        text: this.text
      })

      this.text = "";
    }
  },
  name: "ChatInput"
}
</script>

<style scoped>
.text-input-container {
  height: 100vh;
}
.text-message {
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
}
</style>