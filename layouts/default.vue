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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

body {
  background-color: #f1eae3;
}
ul, li {
  list-style: none;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
