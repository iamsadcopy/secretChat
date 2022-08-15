<template>
  <div>
    <form>
      <textarea v-model="content"></textarea>
      <button v-on:click.prevent="generate">Generate link</button>
    </form>

    <div>
      <span><router-link to="/secret" target="_blank">{{urlLink}}</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      urlLink: ""
    }
  },
  methods: {
    generate() {
      this.urlLink = "blabla",
      this.content = ""
    }
  },
  name: "EncryptionMain"
}
</script>

<style scoped>

</style>