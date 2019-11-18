<template>
    <section class="container">
        <div>
            <svg ref="svgArea" viewBox="0 0 200 100">
                <rect x="0" y="0" width="200" height="100" :fill="bg" stroke="#12b886" stroke-width="15"></rect>
                <text 
                x="50%" 
                y="50%" 
                font-size="8px"
                text-anchor="middle">{{text1}}</text>
            </svg>
        </div>
        <div style="text-align:right">
            <input v-model="text1" type="text">
            <input v-model="bg" type="text">
            <button @click="changeBg('black')">黒</button>
            <button @click="changeBg('white')">白</button>
            <button @click="changeBg()">デフォルト</button>
        </div>
        <div class="generate">
            <button class="generate-button" type="button" @click="generate">つくる</button>
        </div>
    </section>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            text1: 'ヤクザの先輩にエアギター売ってもらった',
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
    mounted () {
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
.preview {
    display: flex;
    @include mq(tbAndSp) {
        flex-direction: column;
    }
    &-canvas {
        background-color: $color-white;
    }
    &-selects {
        padding: 10px;
    }
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
