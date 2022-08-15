<template>
  <div class="name-container">
    <input type="text" class="user-name" v-model="currentUser">
    <button class="join-button" v-on:click="join">Join</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: "",
    }
  },
  methods: {
    join() {
      this.$emit("chat-join", {
        currentUser: this.currentUser
      });
    }
  },
  name: "Join"
}
</script>

<style scoped>
.name-container {
  display: flex;
  flex-direction: column;
  width: 200px;
}
.user-name {
  height: 30px;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: bold;
}
.join-button {
  height: 30px;
  font-size: 20px;
}
</style>