<template>
    <section class="container">
        <div class="generator-container">
            <div class="preview">
                <svg ref="svgArea" viewBox="0 0 500 500">
                    <Bg :fill="bg" />
                    <text x="50%" y="50%" font-size="20px" text-anchor="middle">{{ text1 }}</text>
                </svg>
            </div>
            <div class="select">
                <input v-model="text1" type="text">
                <input v-model="bg" type="text">
                <button @click="changeBg('black')">黒</button>
                <button @click="changeBg('white')">白</button>
                <button @click="changeBg()">デフォルト</button>
            </div>

            <div class="a">
                <ul class="tabs">
                    <li v-for="(key, index) in categories" :key="index">{{ key }}</li>
                </ul>
                <div>
                    <List v-for="(key, index) in material" :key="index" :parts="key" :category="categories[index]" />
                </div>
            </div>
        </div>

        <div class="generate">
            <button class="generate-button" type="button" @click="generate">つくる</button>
        </div>
    </section>
</template>

<script>
import Bg from '@/components/parts/bg/Bg'
import material from '@/apis/material'
import List from '@/components/selects/List'
export default {
    components: {
        Bg, List
    },
    data() {
        return {
            text1: 'ヤクザの先輩にエアギター売ってもらったんですよ',
            bg: '#fff',
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
        }
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
