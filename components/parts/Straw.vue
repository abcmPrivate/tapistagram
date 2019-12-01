<template>
	<g>
		<path :fill="straw.color" d="M417.9,45.6c-8-2.2-15.1-1.8-15.8,0.9l0,0l-41.9,155.2l-5.1,18.8c3.9,0.9,8.5,1.5,13.3,1.5
			c7.1,0,13.5-1.1,18.1-3l3.5-13.1l40.9-151.5l0,0l0,0C431.8,51.7,425.9,47.7,417.9,45.6z"/>
		<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="417.4838" y1="45.3258" x2="415.6923" y2="55.4857">
			<stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0"/>
			<stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0.6"/>
		</linearGradient>
		<path fill="url(#SVGID_4_" d="M431.1,54.3c-0.7,2.7-7.8,3.1-15.8,0.9s-13.9-6.1-13.2-8.7c0.7-2.7,7.8-3.1,15.8-0.9S431.8,51.7,431.1,54.3z"
			/>
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
            straw: 'tapioca/getStraw'
        })
    },
    mounted () {},
    created () {},
    methods: {}
}
</script>
<style lang="scss" scoped>
</style>
