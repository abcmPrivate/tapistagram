<template>
  <section class="sec-container">
    <figure v-if="generatedImageUrl" class="generatedImage">
      <img :src="generatedImageUrl">
      <figcaption>#{{ name }}</figcaption>
    </figure>
    <div v-else class="loading">
      <p class="loading-loader"></p>
    </div>

    <div class="buttonWrapper">
      <p class="generateButton">
        <nuxt-link to="/" class="generateButton-link" @click="init"><i class="fas fa-cog"></i>新しくつくる</nuxt-link>
      </p>
      <p class="shareButton">
        <a :href="twitterLink" target="_blank"><i class="fab fa-twitter"></i>シェアする</a>
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from '@/plugins/firebase'

export default {
  validate ({ params }) {
    return /^[a-zA-Z0-9]+$/.test(params.id)
  },
  components: {
  },
  data() {
    return {
      id: '',
      url: `https://tapistagram.firebaseapp.com/share/`,
      twitterUrl: "https://twitter.com/intent/tweet?",
    }
  },
  computed: {
    ...mapGetters({
      generatedImageUrl: 'generate/getGeneratedImageUrl',
      name: 'generate/getName'
    }),
    twitterLink () {
      const twitterUrl = this.twitterUrl
      const url = `url=${this.url}${this.id}`
      const text = `&text=私の推しタピオカは${this.name}`
      const hashtags = `&hashtags=tapistagram`

      return twitterUrl + url + text + hashtags
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.id = id;
    this.$store.dispatch('generate/getImageUrl', {id: id})
  },
  methods: {
    init () {
      this.$store.commit('generate/changeGeneratedImageUrl', {imageUrl: '', name: ''})
    }
  }
}
</script>

<style lang="scss" scoped>
.sec-container {
  width: 100%;
  max-width: 414px;
  margin: 0 auto;
  padding: 50px 10px;
  box-sizing: border-box;
  @include mq(sp) {
    padding: 20px 10px;
  }
}
.generatedImage {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  img {
    width: 100%;
  }
  figcaption {
    font-size: 2rem;
    color: $color-tapioca;
    margin-bottom: 10px;
  }
}
.buttonWrapper {
  margin-top: 20px;
  display: flex;
  > * {
    flex: 1;
  }
  > *:not(:first-child) {
    margin-left: 10px;
  }
  i {
    margin-right: 5px;
    font-size: 1.6rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 15px 10px;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
    color: $color-white;
  }
}
.generateButton {
  &-link {
    background-color: $color-accent;
    @include link {
      background-color: lighten($color-accent, 10%);
    }
  }
}
.shareButton {
  a {
    background-color: #55acee;
    @include link {
      background-color: lighten(#55acee, 10%);
    }
  }
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 300px;
  &-image {
    width: 100%;
  }
  &-loader {
    color: #ffffff;
    font-size: 1rem;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: load4 1.3s infinite linear;
    transform: translateZ(0);
  }
  @keyframes load4 {
    0%,
    100% {
      box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
      box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
      box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
      box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
      box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
      box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
  }
}
</style>