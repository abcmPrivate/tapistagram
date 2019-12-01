<template>
    <ul class="list">
        <li v-for="(part, index) in parts" :key="index" class="list-icon">
            <label class="oshushi">
                <input type="radio" :name="category">
                <span class="shake" :data-unit="part.name_jp" :style="bgcolor(part.color)" @click="changeParts('tapioca', part)">
                    {{ part.name }}
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
    computed: {},
    mounted () {},
    created () {},
    methods: {
        bgcolor (color) {
            return `background-color: ${color}`
        },

        changeParts (category, part) {
            const payload = {
                category: 'tapioca',
                part: part
            }
            this.$store.commit('tapioca/changeParts', payload)
        }
    }
}
</script>
<style lang="scss" scoped>
.list {
    // display: flex;
    %shakeafter {
        &::after {
            content: attr(data-unit);
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            z-index: 1;
            background-color: rgba(0, 0, 0, .3);
            color: #fff;
        }
    }
    .shake {
        display: block;
        position: relative;
        padding: 50px;
        background-color: #fff;
        border: 2px solid transparent;
        &:hover {
            @extend %shakeafter;
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
