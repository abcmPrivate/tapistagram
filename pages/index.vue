<template>
    <section class="sec-container">
        <div class="generator-container">
            <div class="preview">
                <svg ref="svgArea" viewBox="0 0 600 600">
                    <Bg :fill="bg" />
                    <CupBack />
                    <!-- <text x="50%" y="50%" font-size="20px" text-anchor="middle">{{ text1 }}</text> -->
                    <Drink />
                    <Tapioca />
                    <Foam />
                    <Straw />
                    <CupFront />
                </svg>
                <p>{{ tapiocaName }}</p>
                <i class="fas fa-glass-whiskey"></i>
            </div>

            <div class="partsSelect">
                <button @click="changeBg('black')">黒</button>
                <button @click="changeBg('white')">白</button>
                <button @click="changeBg()">デフォルト</button>
                <!-- <ul class="tabs">
                    <li v-for="(key, index) in categories" :key="index">{{ key }}</li>
                </ul> -->
                <!-- <div> -->
                    <List v-for="(key, index) in material" :key="index" :parts="key" :category="index" />
                <!-- </div> -->
            </div>
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
import Foam from '@/components/parts/Foam'

// etc-components
import List from '@/components/selects/List'

// apis
import material from '@/apis/material'
export default {
    components: {
        Tapioca, Drink, CupFront, CupBack, Bg, Straw, Foam,
        List
    },
    data() {
        return {
            text1: 'ヤクザの先輩にエアギター売ってもらったんですよ',
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
        console.log(material)
    },
    methods: {
        generate () {
            const refs = this.$refs.svgArea
            this.$store.dispatch('generate/onGenerated', {refs: refs})
        },

        changeBg(type) {
            if(type == 'black') return this.bg = '#000'
            if(type == 'white') return this.bg = '#fff'
            return this.bg = '#ed6103'
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
        padding: 15px 10px;
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
    // flex: 1;
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
</style>
