<template>
  <div class="list-container">
    <div>
      <ChatItem v-for="message in messages" :message="message" :key="message.id"/>
    </div>
  </div>
</template>

<script>
import ChatItem from "@/components/Chat/ChatItem";

export default {
  props: ['messages'],
  components: {
    ChatItem
  },
  name: "ChatList"
}
</script>

<style scoped>

</style>