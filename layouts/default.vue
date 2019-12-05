<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/common/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5% !important;
  font-family: 'M PLUS 1p', sans-serif;
}
body {
  font-size: 100%;
  background-color: $color-base !important;
}
ul, li {
  list-style: none;
}
</style>
