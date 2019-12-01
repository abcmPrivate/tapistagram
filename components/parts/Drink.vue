<template>
	<g width="100%" height="100%">
		<path :fill="drink.color" d="M311.7,183.7c-73.1,0-132.4,16.3-132.9,36.4l0.1,1.8c3,19.5,61.3,35.1,132.8,35.1
			c71.5,0,129.8-15.6,132.8-35.1l0.1-1.8C444.1,200,384.8,183.7,311.7,183.7z"/>
		<path :fill="drink.color" d="M311.7,257c-71.5,0-129.8-15.6-132.8-35.1l18.2,291.3h0c1.1,19.9,52,36,114.6,36s113.4-16.1,114.6-36h0
			l18.2-291.3C441.5,241.4,383.2,257,311.7,257z"/>
		<path fill="#fff" style="opacity: .3" d="M311.7,183.7c-73.1,0-132.4,16.3-132.9,36.4l0.1,1.8c3,19.5,61.3,35.1,132.8,35.1
			c71.5,0,129.8-15.6,132.8-35.1l0.1-1.8C444.1,200,384.8,183.7,311.7,183.7z"/>
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
            drink: 'tapioca/getDrink'
        })
    },
    mounted () {},
    created () {},
    methods: {}
}
</script>
<style lang="scss" scoped>
</style>
