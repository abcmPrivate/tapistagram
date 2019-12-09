<template>
    <section class="sec-container">
        <figure v-if="generatedImageUrl" class="generatedImage">
            <img :src="generatedImageUrl">
            <figcaption>#{{ name }}</figcaption>
        </figure>
        <div v-else class="loading">
            <p class="loading-loader"></p>
        </div>

        <p class="generateButton">
            <nuxt-link to="/" class="generateButton-link" @click="init">新しくつくる</nuxt-link>
        </p>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from '@/plugins/firebase'

export default {
    validate ({ params }) {
        return /^[a-zA-Z0-9]+$/.test(params.userId)
    },
    components: {
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            generatedImageUrl: 'generate/getGeneratedImageUrl',
            name: 'generate/getName'
        }),
    },
    mounted () {
        const id = this.$route.params.id
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
        margin-bottom: 20px;
    }
}
.generateButton {
    margin-top: 20px;
    &-link {
        display: block;
        width: 100%;
        border-radius: 4px;
        padding: 15px 10px;
        box-sizing: border-box;
        font-size: 1.4rem;
        background-color: $color-accent;
        color: $color-white;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
        @include link {
            background-color: lighten($color-accent, 10%);
        }
        i {
            margin-right: 5px;
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