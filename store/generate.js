import firebase from '@/plugins/firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import canvg from 'canvg'
import nanoid from 'nanoid'
const db = firebase.firestore()
const generated = db.collection('generated')
export const state = () => ({
    id: '',
    generatedImageUrl: '',
    name: ''
})

export const mutations = {
    changeGeneratedImageUrl (state, payload) {
        state.generatedImageUrl = payload.imageUrl
        state.name = payload.name
    }
}

export const actions = {
    /**
     * generateボタンが押された時のハンドラ
     * @param {*} param0 
     * @param {Object} payload { refs: ? } SVGのRef 
     */
    async onGenerated ({ dispatch }, payload) {
        const refs = payload.refs
        const name = payload.name
        const image = await dispatch('createImage', refs)
        await dispatch('saveImage', { image, name })
    },

    /**
     * SVG RefsからimageURLを生成するメソッド
     * @param {*} param0 
     * @param {*} refs SVG Refs
     */
    async createImage ({}, refs) {
        const canvas = document.createElement('canvas')
        canvas.width = 500
        canvas.height = 500

        // SVG → Canvas 変換
        const data = new XMLSerializer().serializeToString(refs);
        canvg(canvas, data)

        // imageURLを返す
        return canvas.toDataURL('image/png').split(',')[1]
    },

    /**
     * 画像をfirestoreに保存するメソッド
     * @param {*} param0 
     * @param {*} image 画像データ 
     */
    async saveImage ({ dispatch }, payload) {
        const image = payload.image
        const name = payload.name

        const id = nanoid()
        const storageRef = firebase.storage().ref();
        const createRef = storageRef.child(`generate/${id}.png`);

        await createRef.putString(image, 'base64').then((snapshot) => {
            console.log('保存しました');
        }).catch((err) => {
            console.log('保存に失敗しました')
            // エラーハンドリング処理
        })

        const imageUrl = await createRef.getDownloadURL()
        await generated.doc(id).set({
            url: imageUrl,
            name
        })

        // 一連の処理が終了したら生成ページへ飛ばす
        await dispatch('toGeneratedPage', {
            id: id
        })
    },

    /**
     * 生成ページへ飛ばすメソッド
     * @param {*} param0 
     * @param {*} payload {id: String}
     */
    async toGeneratedPage({}, payload) {
        const id = payload.id
        this.$router.push(`/generate/${id}/`)
    },

    /**
     * 画像URLをfirestoreから取得するメソッド
     * @param {*} param0 
     * @param {Object} payload { id: String } リクエストされたID
     */
    async getImageUrl ({ commit }, payload) {
        let imageUrl = ''
        let name = ''
        const id = payload.id
        const doc = await generated.doc(id).get()
        if(doc.exists) {
            const data = await doc.data()

            imageUrl = data.url
            name = data.name
        }
        await commit('changeGeneratedImageUrl', {imageUrl, name})
    },
}

export const getters = {
    getGeneratedImageUrl (state ) {
        return state.generatedImageUrl
    },
    getName (state) {
        return state.name
    }
}
