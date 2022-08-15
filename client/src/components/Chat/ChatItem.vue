<template>
  <div>
    <b>
      {{ message.user }}
    </b>
    : {{ message.text }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  name: "ChatItem"
}
</script>

<style scoped>

</style>