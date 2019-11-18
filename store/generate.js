import firebase from '@/plugins/firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import canvg from 'canvg'
import nanoid from 'nanoid'
const db = firebase.firestore()
const generated = db.collection('generated')
export const state = () => ({
    id: '',
    generatedImageUrl: ''
})

export const mutations = {
    changeGeneratedImageUrl (state, imageUrl) {
        state.generatedImageUrl = imageUrl
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
        const image = await dispatch('createImage', refs)
        await dispatch('saveImage', image)
    },

    /**
     * SVG RefsからimageURLを生成するメソッド
     * @param {*} param0 
     * @param {*} refs SVG Refs
     */
    async createImage ({}, refs) {
        const canvas = document.createElement('canvas')
        canvas.width = refs.width.baseVal.value;
        canvas.height = refs.height.baseVal.value;

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
    async saveImage ({ dispatch }, image) {
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
            url: imageUrl
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
        const id = payload.id
        const doc = await generated.doc(id).get()
        if(doc.exists) {
            imageUrl = await doc.data().url
        }
        await commit('changeGeneratedImageUrl', imageUrl)
    },
}

export const getters = {
    getGeneratedImageUrl (state ) {
        return state.generatedImageUrl
    }
}
