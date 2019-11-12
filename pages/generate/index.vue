<template>
  <div class="container">
    {{ $route.query }}
  </div>
</template>

<script>

export default {
  components: {
  },
  mounted () {
    console.log(this.$route.query)
  }
}
</script>

<style>

</style>
