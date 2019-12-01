<template>
    <g>
        <rect x="20" y="20" width="100px" height="200px" :fill="tapioca.color" />
        <text x="50%" y="30%" font-size="20px" text-anchor="middle">{{ tapioca.name }}</text>
    </g>
</template>

<script>
import { mapGetters } from 'vuex'
// import A from '@/components/...'
export default {
    components: {},
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters ({
            tapioca: 'tapioca/getTapioca'
        })
    },
    mounted () {},
    created () {},
    methods: {}
}
</script>
<style lang="scss" scoped>
</style>
