<template>
    <ul class="list" :class="{'is-selected': selected}">
        <li v-for="(part, index) in parts" :key="index" class="list-icon">
            <label class="list-label">
                <input type="radio" :name="category">
                <span class="list-text" :data-unit="part.name_jp" :style="bgcolor(part.color)" @click="changeParts(part)">
                    {{ part.name_jp }}
                </span>
            </label>
        </li>
    </ul>
</template>

<script>
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
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    computed: {
        showedCategory () {
            const category = this.category
        }
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
    transition: .2s;
    display: none;
    &.is-selected {
        display: block;
    }
    &-text {
        &:hover {
            cursor: pointer;
            opacity: .8;
        }
    }
    input {
        display: none;
        &:checked + .list-text {
            border-color: #ed6103;
        }
    }
}
</style>
