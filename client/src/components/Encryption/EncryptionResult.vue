<template>
  <div>
    <div class="content">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    }
  },
  mounted() {
    fetch(`http://localhost:3000/api/secret/${this.$route.params.id}`)
        .then(res => res.json())
        .then(res => {
          this.message = res;
        })
  },
  name: "EncryptionResult"
}
</script>

<style scoped>

</style>