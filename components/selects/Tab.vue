<template>
    <div>
        <ul class="tapis">
            <li @click="changeActiveCategory('tapioca')" :class="{'is-selected': isActiveCategory == 'tapioca'}"><TapiIcon :width="30" tapioca/></li>
            <li @click="changeActiveCategory('drink')" :class="{'is-selected': isActiveCategory == 'drink'}"><TapiIcon :width="30" drink /></li>
            <li @click="changeActiveCategory('foam')" :class="{'is-selected': isActiveCategory == 'foam'}"><TapiIcon :width="30" foam /></li>
            <li @click="changeActiveCategory('cream')" :class="{'is-selected': isActiveCategory == 'cream'}"><TapiIcon :width="30" cream /></li>
            <li @click="changeActiveCategory('straw')" :class="{'is-selected': isActiveCategory == 'straw'}"><TapiIcon :width="30" straw /></li>
        </ul>
        <List :parts="material.tapioca" category="tapioca" />
        <List :parts="material.drink" category="drink" />
        <List :parts="material.foam" category="foam" />
        <List :parts="material.cream" category="cream" />
        <List :parts="material.straw" category="straw" />
    </div>
</template>

<script>
// import A from '@/components/...'
import { mapGetters } from 'vuex'
import List from '@/components/selects/List'
import TapiIcon from '@/components/common/TapiIcon'

export default {
    components: { TapiIcon, List },
    props: {
        material: {
            type: Object,
            default: null
        }
    },
    data() {
        return {}
    },
    computed: {
        ...mapGetters ({
            isActiveCategory: 'tab/getIsActive'
        }),
    },
    mounted () {},
    created () {},
    methods: {
        changeActiveCategory (category) {
            this.$store.commit('tab/changeActiveCategory', category)
        },
        oshushi (category) {
            return this.isActiveCategory == category
        }
    }
}
</script>
<style lang="scss" scoped>
.tapis {
    display: flex;
    li {
        flex: 1;
        display: flex;
        justify-content: center;
        padding: 10px 0;
        background-color: lighten($color-milktea, 10%);
        &.is-selected,
        &:hover {
            background-color: $color-milktea;
        }
    }
}
</style>
