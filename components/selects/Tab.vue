<template>
    <div>
        <ul class="tapis">
            <li @click="changeCategory('tapioca')" :class="{'is-selected': tapioca }"><TapiIcon :width="30" tapioca/></li>
            <li @click="changeCategory('drink')" :class="{'is-selected': drink }"><TapiIcon :width="30" drink /></li>
            <li @click="changeCategory('foam')" :class="{'is-selected': foam }"><TapiIcon :width="30" foam /></li>
            <li @click="changeCategory('cream')" :class="{'is-selected': cream }"><TapiIcon :width="30" cream /></li>
            <li @click="changeCategory('straw')" :class="{'is-selected': straw }"><TapiIcon :width="30" straw /></li>
        </ul>
        <List :parts="material.tapioca" category="tapioca" :selected="tapioca" />
        <List :parts="material.drink" category="tapioca" :selected="drink" />
        <List :parts="material.foam" category="tapioca" :selected="foam" />
        <List :parts="material.cream" category="tapioca" :selected="cream" />
        <List :parts="material.straw" category="tapioca" :selected="straw" />
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
            tapioca: 'tab/getTapioca',
            drink: 'tab/getDrink',
            foam: 'tab/getFoam',
            cream: 'tab/getCream',
            straw: 'tab/getStraw'
        })
    },
    mounted () {},
    created () {},
    methods: {
        changeCategory (category) {
            this.$store.commit('tab/changeView', category)
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
        border-bottom: 5px solid $color-milktea;
        background-color: lighten($color-milktea, 10%);
        &.is-selected,
        &:hover {
            background-color: $color-milktea;
        }
    }
}
</style>
