<template>
    <div class="container">
        <div class="preview">
            <div class="preview-canvas">
                <p>sample</p>
                <p :style="str">{{ straw }}</p>
                {{ sushi }}
                {{ ramen }}
            </div>
            <dl class="preview-selects">
                <div>
                    <dt>ストロー</dt>
                    <dd>
                        カラーパレット開くやつ
                    </dd>
                    <dt>寿司</dt>
                    <dd>
                        <!-- ここのinputを画像にするだけで終わりそう -->
                        <ul class="valiations">
                            <li>
                                <label>
                                    <input v-model="sushi" type="radio" name="sushi" value="1">
                                    <span class="valiations-prev">1</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input v-model="sushi" type="radio" name="sushi" value="2">
                                    <span class="valiations-prev">2</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input v-model="sushi" type="radio" name="sushi" value="3">
                                    <span class="valiations-prev">3</span>
                                </label>
                            </li>
                        </ul>
                    </dd>
                </div>
                <div>
                    <dt>ラーメン</dt>
                    <dd>
                        <ul class="valiations">
                            <li>
                                <label>
                                    <input v-model="ramen" type="radio" name="ramen" value="1">
                                    <span class="valiations-prev">1</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input v-model="ramen" type="radio" name="ramen" value="2">
                                    <span class="valiations-prev">2</span>
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input v-model="ramen" type="radio" name="ramen" value="3">
                                    <span class="valiations-prev">3</span>
                                </label>
                            </li>
                        </ul>
                    </dd>
                </div>
            </dl>
        </div>
        <p class="generate">
            <nuxt-link :to="generateUrl" class="generate-button">
                generate-tapi
            </nuxt-link>
        </p>
    </div>
</template>

<script>
export default {
    components: {
    },
    data () {
        return {
            straw: 'ed6103',
            sushi: 1,
            ramen: 1
        }
    },
    computed: {
        generateUrl () {
            let url = '/generate?'
            if (this.straw) {
                url = `${url}straw=${this.straw}`
            }
            if (this.sushi) {
                url = `${url}&sushi=${this.sushi}`
            }
            if (this.ramen) {
                url = `${url}&ramen=${this.ramen}`
            }
            return url
        },
        str () {
            return `color: #${this.straw}`
        }
    },
    mounted () {
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
