<template>
    <div class="canvas prg-canvas">
        <svg ref="svgArea" viewBox="0 0 500 500">
            <slot />
        </svg>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
    },
    computed: {
    },
    mounted () {
    },
    created () {},
    methods: {}
}
</script>
<style lang="scss" scoped>
.canvas {
    width: 100%;
    max-width: 500px;
}
</style>
