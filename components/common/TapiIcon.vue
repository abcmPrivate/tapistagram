<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="width" viewBox="0 0 140 210">
        <g id="straw">
            <path :fill="strawColor" d="M104.9,80.5h-5.6c-1.8,0-3.3-1.6-3.1-3.4l8.1-70.6c0.2-1.5,1.5-2.7,3.1-2.7h5.6c1.8,0,3.3,1.6,3.1,3.4
                L108,77.8C107.8,79.3,106.5,80.5,104.9,80.5z"/>
        </g>
        <g id="drink">
            <g>
                <polygon :fill="drinkColor" points="26.5,198.7 113.6,198.7 129.7,76.2 10.4,76.2"/>
            </g>
        </g>
        <g id="foam">
                <polygon :fill="foamColor" points="129.7,76.2 10.4,76.2 14.8,110 125.2,110"/>
        </g>
        <g id="cream">
            <g>
                <path :fill="creamColor" d="M122.4,71.2L122.4,71.2C122.4,71.2,122.4,71.2,122.4,71.2c-4.8-5.3-11.7-9.9-20.1-13.1c0,0,0,0,0,0
                    c-10.2-5-14.9-4.2-14.7-7.3c0.1-3.2-4.3-4.5-6.1-2s-19.9,3.9-19.9,3.9l0,0c-23.9,2-43.2,12.6-49.1,26.4h114.9
                    C126.3,76.3,124.6,73.6,122.4,71.2z"/>
            </g>
        </g>
        <g id="tapi">
            
                <ellipse transform="matrix(0.3018 -0.9534 0.9534 0.3018 -101.1354 160.3906)" :fill="tapiocaColor" cx="58.9" cy="149.2" rx="8.7" ry="8.7"/>
            
                <ellipse transform="matrix(0.3018 -0.9534 0.9534 0.3018 -123.9394 185.3372)" :fill="tapiocaColor" cx="64.6" cy="177.3" rx="8.7" ry="8.7"/>
            
                <ellipse transform="matrix(0.3018 -0.9534 0.9534 0.3018 -93.3941 196.6526)" :fill="tapiocaColor" cx="87.6" cy="162.1" rx="8.7" ry="8.7"/>
        </g>
        <g id="cup">
            <path fill="#CDBEB2" d="M108.8,203.7H31.3c-5.3,0-9.8-4-10.4-9.2L2.1,42.3c-0.4-3,0.6-6,2.5-8.2c2-2.3,4.9-3.5,7.9-3.5h115.1
                c3,0,5.9,1.3,7.9,3.5s2.9,5.2,2.6,8.2l-18.8,152.3C118.6,199.8,114.1,203.7,108.8,203.7z M12.5,40.5c-0.1,0-0.2,0-0.4,0.2
                C11.9,40.8,12,41,12,41l18.9,152.3c0,0.2,0.2,0.4,0.5,0.4h77.5c0.2,0,0.4-0.2,0.5-0.4L128,41c0-0.1,0-0.2-0.1-0.4s-0.3-0.2-0.4-0.2
                H12.5z"/>
        </g>
    </svg>
</template>

<script>
// import A from '@/components/...'
export default {
    components: {},
    props: {
        width: {
            type: Number,
            default: 20
        },
        tapioca: {
            type: Boolean,
            default: false,
        },
        drink :{
            type: Boolean,
            default: false
        },
        straw: {
            type: Boolean,
            default: false,
        },
        foam: {
            type: Boolean,
            default: false,
        },
        cream: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    computed: {
        tapiocaColor () {
            return this.tapioca ? '#684535' : '#f1eae3'
        },
        drinkColor () {
            return this.drink ? '#E2C1A3' : '#CDBEB2'
        },
        strawColor () {
            return this.straw ? '#ac3739' : '#CDBEB2'
        },
        foamColor () {
            return this.foam ? '#ffeecd' : '#D7CBC1'
        },
        creamColor () {
            return this.cream ? '#fffef6' : '#E1D8D1'
        }
    },
    mounted () {},
    created () {},
    methods: {}
}
</script>
<style lang="scss" scoped>
</style>
