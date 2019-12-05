<template>
    <div class="list-wrapper" :class="{'is-selected': showedCategory}">
        <ul class="list">
            <li v-for="(part, index) in parts" :key="index" class="list-icon">
                <label class="list-label">
                    <input type="radio" :name="category">
                    <span class="list-text" :data-unit="part.name_jp" :style="bgcolor(part.color)" @click="changeParts(part)">
                        {{ part.name_jp }}
                    </span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    components: {},
    props: {
        category: {
            type: String,
            default: ''
        },
        parts: {
            type: Array,
            default: null
        },
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters ({
            isActiveCategory: 'tab/getIsActive'
        }),
        showedCategory () {
            return this.category == this.isActiveCategory
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
.list-wrapper {
    border: 5px solid $color-milktea;
    transition: .2s;
    display: none;
    padding: 10px;
    overflow-x: scroll;
    @include mq(sp) {
        height: 110px;
    }
    &.is-selected {
        display: block;
    }
}
.list {
    display: flex;
    overflow-x: scroll;
    @include mq {
        flex-wrap: wrap;
    }
    li {
        flex: 0 0 80px;
        min-width: 80px;
        height: 80px;
    }
    &-text {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
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
