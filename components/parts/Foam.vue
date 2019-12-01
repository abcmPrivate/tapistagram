<template>
    <g>
        <path :fill="foam.color" d="M433.5,177.9c-0.5-1.1-1.1-2.1-1.7-3c0,0,0-0.1,0-0.1c-6.3-14.6-25.2-22.2-46.3-29.8
            c-21-7.6-36.8-3.6-34.8-9.9c2-6.3-9.2-14.1-9.9-7.5c-0.7,6.6-9.9,9.9-48.7,7.5s-28.9,5-51.3,8.3c-22.4,3.3-26.3,21.5-26.3,21.5l0,0
            c-13.3,2.6-20.5,10.8-28.9,20.3c-10.5,11.9-4.3,35.9-4.3,35.9l0.1,1.8c2.9,19.3,60.4,34.6,131,34.6c70.5,0,128-15.4,131-34.6
            l0.1-1.8C443.6,219.3,444.7,202.3,433.5,177.9z"/>
    </g>
</template>

<script>
import { mapGetters } from 'vuex'
// import A from '@/components/...'
export default {
    components: {},
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            foam: 'tapioca/getFoam'
        })
    },
    mounted () {},
    created () {},
    methods: {}
}
</script>
<style lang="scss" scoped>
</style>
