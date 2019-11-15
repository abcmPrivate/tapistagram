<template>
  <section class="container">
    <div>
      <svg ref="svgArea" viewBox="0 0 200 100">
        <rect x="0" y="0" width="200" height="100" fill="#fff" stroke="#12b886" stroke-width="15"></rect>
        <text 
        x="50%" 
        y="50%" 
        font-size="8px"
        text-anchor="middle">{{text1}}</text>
      </svg>
    </div>
    <div style="text-align:right">
      <input v-model="text1" type="text" style="width:100%; margin-bottom:10px">
      <button @click="create">つくる</button>
    </div>
    <img src="https://firebasestorage.googleapis.com/v0/b/tapistagram.appspot.com/o/generate%2Ff_J9JrHxPcurEXBAU_72w.png?alt=media&token=07039973-318f-4658-bfeb-950c4d811f89">
  </section>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  components: {
  },
  data() {
    return {
      text1: 'ヤクザの先輩にエアギター売ってもらった',
    }
  },
  mounted () {
  },
  methods: {
    async create() {
      const refs = this.$refs.svgArea
      this.$store.dispatch('generate/onGenerated', {refs: refs})
    }
  }
}
</script>

<style>
.container {
  width: 800px;
  height: 800px;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
}
</style>