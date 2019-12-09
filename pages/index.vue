<template>
    <section class="sec-container">
        <div class="generator-container">
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
                <!-- <div class="generate">
                    <button class="generate-button" type="button" @click="changePicker"><i class="fas fa-fill-drip"></i></button>

                    <div class="generate-picker" v-if="showPicker">
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
                    </div>

                </div> -->
            </div>

            <div class="partsSelect">
                <h2 class="heading">ドリンクをカスタマイズ</h2>
                <Tab :material="material" />
            </div>
        </div>

        <p class="generateButton">
            <button type="button" @click="generate"><i class="fas fa-check"></i>完成する</button>
        </p>

        <div class="generating" v-if="generating">
            <div class="generating-container">
                <p class="generating-loader"></p>
                <p class="generating-message">Now Generating...</p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

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
                hideCanvas: true,
                hideInputs: true,
                hideModeSwitch: true,
                mode: 'rgba',
                modes: ['rgba'],
                showSwatches: true,
                disabled: true
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
            showPicker: false,
            generating: false,
            material: material
        }
    },
    computed: {
        ...mapGetters ({
            tapiocaName: 'tapioca/getName',
            generated: 'generate/getGenerated'
        })
    },
    mounted () {
    },
    created () {
        this.$store.dispatch('generate/storeGenerated')
    },
    methods: {
        async generate () {
            this.generating = true;
            await sleep(2000)
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
        },

        changePicker () {
            console.log('aaa')
            this.showPicker = !this.showPicker
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
    max-width: 640px;
    margin: 0 auto;
    padding: 50px 10px;
    box-sizing: border-box;
    @include mq(sp) {
        padding: 20px 10px;
    }
}
.generator-container {
    width: 100%;
    display: flex;
    justify-content: center;
    @include mq(sp) {
        flex-direction: column;
    }
}
.heading {
    @include tagHeading;
    margin-bottom: 15px;
}
.preview {
    flex: 1;
    position: relative;
}
.partsSelect {
    flex: 1;
    margin-left: 30px;
    @include mq(sp) {
        margin: 20px 0 0 0;
    }
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
    &-picker {
        position: absolute;
        visibility: hidden;
        right: 10px;
        bottom: 10px;
        transition: .2s;
        opacity: 0;
        &.is-selected {
            visibility: visible;
            opacity: 1;
            transform: translateY(-3px);
        }
    }
}
.generateButton {
    margin-top: 20px;
    button {
        display: block;
        width: 100%;
        border-radius: 4px;
        padding: 15px 10px;
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
        i {
            margin-right: 5px;
        }
    }
}
.generating {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba($color-tapioca, .7);
    z-index: 2000;
    &-container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    &-message {
        color: #fff;
        font-size: 1.4rem;
        margin-top: 50px;
    }
    &-loader {
        color: #ffffff;
        font-size: 1rem;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        text-indent: -9999em;
        animation: load4 1.3s infinite linear;
        transform: translateZ(0);
    }
    @-webkit-keyframes load4 {
    0%,
    100% {
        box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
        box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
    }
    @keyframes load4 {
    0%,
    100% {
        box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
    }
    12.5% {
        box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    25% {
        box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
    }
    37.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    50% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
    }
    62.5% {
        box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
    }
    75% {
        box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
    }
    87.5% {
        box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
    }
    }
}
</style>
