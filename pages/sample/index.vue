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
import canvg from 'canvg'
import nanoid from 'nanoid'

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
      const id = nanoid()
      const storageRef = firebase.storage().ref();
      const createRef = storageRef.child(`generate/${id}.png`);

      // 擬似canvas要素を作成
      const canvas = document.createElement('canvas')
      const svg = this.$refs.svgArea
      canvas.width = svg.width.baseVal.value;
      canvas.height = svg.height.baseVal.value;

      // SVG → Canvas 変換
      const data = new XMLSerializer().serializeToString(this.$refs.svgArea);
      canvg(canvas, data)

      // 作成
      let image = canvas.toDataURL('image/png').split(',')[1]
      createRef.putString(image, 'base64').then((snapshot) =>{
        console.log('Uploaded a blob or file!');
      });

      const dlUrl = await createRef.getDownloadURL()
      const payload = {
        id: id,
        imageUrl: imageUrl
      }
      this.$store.dispatch('generate/onGenerated', payload);
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