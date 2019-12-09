<template>
    <label class="selectBox">
        <select v-model="part" @change="changeParts">
            <option v-for="(parts, index) in a" :key="index" :value="parts">{{ parts.name_jp }}</option>
        </select>
    </label>
</template>

<script>
// import A from '@/components/...'
import { mapGetters } from 'vuex'
import List from '@/components/selects/List'
import TapiIcon from '@/components/common/TapiIcon'

export default {
    components: { TapiIcon, List },
    props: {
        category: {
            type: String,
            default: 'tapioca'
        },
        a: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            selectedCategory: this.category,
            part: this.a[0]
        }
    },
    computed: {
        ...mapGetters ({

        })
    },
    mounted () {},
    created () {},
    methods: {
        changeActiveCategory (category) {
            this.$store.commit('tab/changeActiveCategory', category)
        },
        oshushi (category) {
            return this.isActiveCategory == category
        },
        changeParts () {
            const category = this.category
            const part = this.part
            const payload = { category, part }
            this.$store.commit('tapioca/changeParts', payload)
        }
    }
}
</script>
<style lang="scss" scoped>
.selectBox {
    select {
        display: block;
        width: 100%;
        background-color: #fff;
        padding: 10px 10px;
        border-radius: 4px;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid transparent;
        &:focus,
        &:hover {
            border-color: $color-accent;
        }
    }
}
</style>
