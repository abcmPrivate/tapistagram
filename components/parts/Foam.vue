<template>
    <g>
        <path :fill="foam.color" d="M311.9,183.7c-73.1,0-132.4,16.3-132.9,36.4l0.1,1.8c3,19.5,61.3,35.1,132.8,35.1
            c71.5,0,129.8-15.6,132.8-35.1l0.1-1.8C444.3,200,385,183.7,311.9,183.7z"/>
        
            <radialGradient id="SVGID_5_" cx="311.9336" cy="256.8593" r="179.981" gradientTransform="matrix(-1 8.682013e-03 -5.018596e-03 -0.578 625.1445 402.6217)" gradientUnits="userSpaceOnUse">
            <stop  offset="0.533" :style="stopColor"/>
            <stop  offset="1" :style="stopColor + 'stop-opacity:0'"/>
        </radialGradient>
        <path fill="url(#SVGID_5_)" d="M444.7,221.9c-3,19.5-61.3,35.1-132.8,35.1c-71.5,0-129.8-15.6-132.8-35.1l6.5,104.2c0,0.2,0,0.4,0,0.6
            l0.1,1.8c0,0.2,0.1,0.4,0.1,0.6c3.9,18.3,58.8,32.8,126.1,32.8c67.3,0,122.2-14.5,126.1-32.8c0-0.2,0.1-0.4,0.1-0.6l0.1-1.7
            c0-0.2,0-0.4,0-0.6L444.7,221.9z"/>
        
            <radialGradient id="SVGID_6_" cx="311.9336" cy="256.8593" r="179.981" gradientTransform="matrix(-1 8.682013e-03 -5.018596e-03 -0.578 625.1445 402.6217)" gradientUnits="userSpaceOnUse">
            <stop  offset="0.533" :style="stopColor"/>
            <stop  offset="1" :style="stopColor + 'stop-opacity:0'"/>
        </radialGradient>
        <path fill="url(#SVGID_6_)" d="M444.7,221.9c-3,19.5-61.3,35.1-132.8,35.1c-71.5,0-129.8-15.6-132.8-35.1l6.5,104.2c0,0.2,0,0.4,0,0.6
            l0.1,1.8c0,0.2,0.1,0.4,0.1,0.6c3.9,18.3,58.8,32.8,126.1,32.8c67.3,0,122.2-14.5,126.1-32.8c0-0.2,0.1-0.4,0.1-0.6l0.1-1.7
            c0-0.2,0-0.4,0-0.6L444.7,221.9z"/>
    </g>
</template>

<script>
import { MapGetters, mapGetters } from 'vuex'
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
        }),
        stopColor () {
            const color = this.foam.color
            return `stop-color: ${color};`
        }
    },
    mounted () {},
    created () {},
    methods: {}
}
</script>
<style lang="scss" scoped>
</style>
