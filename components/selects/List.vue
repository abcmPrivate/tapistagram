<template>
    <ul class="list">
        <li v-for="(part, index) in parts" :key="index" class="list-icon">
            <label class="oshushi">
                <input type="radio" :name="category">
                <span class="shake" :data-unit="part.name_jp" :style="bgcolor(part.color)" @click="changeParts(part)">
                    {{ part.name_jp }}
                </span>
            </label>
        </li>
    </ul>
</template>

<script>
// import A from '@/components/...'
export default {
    components: {},
    props: {
        category: {
            type: String,
            default: ''
        },
        /* part.name, part.name_jp, part.color */
        parts: {
            type: Array,
            default: null
        }
    },
    data() {
        return {}
    },
    computed: {
    },
    mounted () {},
    created () {},
    methods: {
        bgcolor (color) {
            return `background-color: ${color}`
        },

        changeParts (part) {
            const category = this.category
            const payload = { category, part }
            this.$store.commit('tapioca/changeParts', payload)
        }
    }
}
</script>
<style lang="scss" scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    .shake {
        // position: relative;
        // background-color: #fff;
        // border: 2px solid transparent;
        // width: 100px;
        // height: 100px;
        // box-sizing: border-box;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // font-size: 1.2em;
        &:hover {
            cursor: pointer;
            opacity: .8;
        }
    }
    input {
        display: none;
        &:checked + .shake {
            border-color: #ed6103;
        }
    }
}
</style>
