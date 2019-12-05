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
                <p>{{ tapiocaName }}</p>
            </div>

            <div class="partsSelect">
                <ul class="tapis">
                    <li><TapiIcon width="30" tapioca/></li>
                    <li><TapiIcon width="30" drink /></li>
                    <li><TapiIcon width="30" foam /></li>
                    <li><TapiIcon width="30" cream /></li>
                    <li><TapiIcon width="30" straw /></li>
                </ul>

                <div class="frame">
                    <List :parts="material.tapioca" category="tapioca" />
                </div>

                <!-- <List v-for="(key, index) in material" :key="index" :parts="key" :category="index" /> -->
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

        <div class="generate">
            <button class="generate-button" type="button" @click="generate">つくる</button>
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

// apis
import material from '@/apis/material'

export default {
    components: {
        Tapioca, Drink, CupFront, CupBack, Bg, Straw, Cream, Foam,
        List, TapiIcon
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
        // AColorPicker.from('.picker').on('change', (picker, color) => {
        //     document.body.style.backgroundColor = color;
        // });
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
.sec-container {
    width: 100%;
    max-width: 1080px;
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
.preview {
    width: 100%;
    max-width: 500px;
    flex: 2;
}
.generate {
    margin-top: 20px;
    &-button {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 15px 10px;
        font-size: 1.2rem;
        border-radius: 20px;
        background-color: $color-accent;
        color: $color-white;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        @include link {
            background-color: lighten($color-accent, 10%);
        }
    }
}
.partsSelect {
    flex: 3;
    margin-left: 20px;
    @include mq(sp) {
        margin: 10px 0 0 0;
    }
    // flex: 1;
}
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
