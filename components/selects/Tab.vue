<template>
        <ul class="materials">
            <li v-for="(value, key) in material" :key="key">
                <p class="materials-icon"><TapiIcon :material="key" /></p>
                <p class="materials-select"><Select :category="key" :a="value" /></p>
            </li>
        </ul>
</template>

<script>
// import A from '@/components/...'
import { mapGetters } from 'vuex'
import Select from '@/components/selects/Select'
import TapiIcon from '@/components/common/TapiIcon'

export default {
    components: { TapiIcon, Select },
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
        change (category) {
            console.log(category)
        },
    }
}
</script>
<style lang="scss" scoped>
.materials {
    > li {
        &:not(:first-child) {
            margin-top: 10px;
        }
        display: flex;

    }
    &-icon {
        width: 20px;
        display: flex;
        align-items: center;
    }
    &-select {
        flex: 1;
        margin-left: 10px;
    }
}


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
