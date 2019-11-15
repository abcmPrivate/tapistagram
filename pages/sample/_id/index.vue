<template>
    <section class="container">
        <div v-if="generatedImageUrl">
            うっひょおおおおおwwwwww
            <img :src="generatedImageUrl">
        </div>
        <div v-else>画像ないっすね</div>
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
            generatedImageUrl: 'generate/getGeneratedImageUrl'
        }),
    },
    mounted () {
        const id = this.$route.params.id
        this.$store.dispatch('generate/getImageUrl', {id: id})
    },
    methods: {
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