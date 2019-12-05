<template>
    <section class="sec-container">
        <div class="generator-container">
            <div class="tapiocaName">
                <p class="tapiocaName-tag">{{ tapiocaName }}</p>
            </div>

            <div class="preview">
                <svg ref="svgArea" viewBox="0 0 600 600">
                    <Bg :fill="bg" />
                    <CupBack />
                    <Drink />
                    <Tapioca />
                    <Foam />
                    <Cream />
                    <Straw />
                    <CupFront />
                </svg>
                <div class="generate">
                    <button class="generate-button" type="button" @click="generate"><i class="fas fa-check"></i></button>
                </div>
            </div>

            <div class="partsSelect">
                <Tab :material="material" />
            </div>
        </div>

        <div class="d-flex justify-center">
            <v-color-picker
                v-model="bg"
                :hide-canvas="pick.hideCanvas"
                :hide-inputs="pick.hideInputs"
                :hide-mode-switch="pick.hideModeSwitch"
                :mode.sync="pick.mode"
                :show-swatches="pick.showSwatches"
                class="mx-auto"
            ></v-color-picker>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

// parts-components
import Bg from '@/components/parts/Bg'
import Tapioca from '@/components/parts/Tapioca'
import Drink from '@/components/parts/Drink'
import CupFront from '@/components/parts/cups/Front'
import CupBack from '@/components/parts/cups/Back'
import Straw from '@/components/parts/Straw'
import Cream from '@/components/parts/Cream'
import Foam from '@/components/parts/Foam'

// etc-components
import TapiIcon from '@/components/common/TapiIcon'
import List from '@/components/selects/List'
import Tab from '@/components/selects/Tab'

// apis
import material from '@/apis/material'

export default {
    components: {
        Tapioca, Drink, CupFront, CupBack, Bg, Straw, Cream, Foam,
        List, TapiIcon, Tab
    },
    data() {
        return {
            pick: {
                color: '#8E00FF',
                hideCanvas: false,
                hideInputs: true,
                hideModeSwitch: true,
                mode: 'rgba',
                modes: ['rgba', 'hsla', 'hexa'],
                showSwatches: true,
            },
            bg: '#9b7d66',
            custom: {
                tapioca: {
                    type: 'black',
                    amount: 'normal'
                },
                drink: {
                    type: 'milktea'
                },
                foam: {
                    type: 'milk'
                },
                source: {
                    type: 'blackSugar'
                },
                lid: {
                    color: '#fff'
                },
                straw: {
                    color: '#000'
                }
            },
        }
    },
    computed: {
        categories () {
            const arr = []
            for(let[key] of Object.entries(material)) {
                arr.push(key)
            }
            return arr
        },
        material () {
            return material;
        },
        ...mapGetters({
            tapiocaName: 'tapioca/getName'
        })
    },
    mounted () {
    },
    created () {
    },
    methods: {
        generate () {
            const refs = this.$refs.svgArea
            const name = this.tapiocaName
            this.$store.dispatch('generate/onGenerated', {
                refs, name
            })
        },

        changeBg(type) {
            if(type == 'black') return this.bg = '#000'
            if(type == 'white') return this.bg = '#fff'
            return this.bg = '#ed6103'
        },

        changeParts (part, category) {
            const payload = { category, part }
            this.$store.commit('tapioca/changeParts', payload)
        }
    }
}
</script>

<style lang="scss" scoped>

.tapiocaName {
    &-tag {
        @include tagHeading;
    }
}

.sec-container {
    width: 100%;
    max-width: 414px;
    margin: 0 auto;
    padding: 20px 10px;
    box-sizing: border-box;
    @include mq(sp) {
        padding: 20px 10px;
    }
}
.generator-container {
    width: 100%;

    display: flex;
    // justify-content: center;
    flex-direction: column;
    @include mq(sp) {
    }
}
.heading {
    @include tagHeading;
}
.preview {
    max-width: 500px;
    position: relative;
}
.generate {
    position: absolute;
    right: 12px;
    bottom: 12px;
    &-button {
        display: block;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        box-sizing: border-box;
        font-size: 1.4rem;
        background-color: $color-accent;
        color: $color-white;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
        @include link {
            background-color: lighten($color-accent, 10%);
        }
    }
}
.partsSelect {
}

.valiations {
    display: flex;
    li {
        &:not(:first-child) {
            margin-left: 10px;
        }
    }
    input {
        display: none;
        &:checked + span {
            border: 2px solid $color-accent;
        }
    }
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #fff;
        box-sizing: border-box;
        transition: .15s;
        &:hover {
            transform: scale(1.1);
        }
    }
}

.selec {
    display: block;
    background-color: #fff;
    padding: 20px;
}
</style>
