<template>
  <div>
    <form>
      <textarea v-model="content"></textarea>
      <button v-on:click.prevent="generate">Generate link</button>
    </form>

    <div>
      <span><router-link v-bind:to="`/secret/${urlPath}`" target="_blank">{{urlLink}}</router-link></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      urlLink: "",
      urlPath: "",
    }
  },
  methods: {
    generate() {
      const data = {
        message: this.content
      }
      const message = fetch(`http://localhost:3000/api/secret`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
          .then(res => {
            this.urlPath = res.hash
            this.urlLink = `${window.location.host}/${this.urlPath}`
          })
      this.content = ""
    }
  },
  name: "EncryptionMain"
}
</script>

<style scoped>

</style>