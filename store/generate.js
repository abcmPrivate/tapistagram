import firebase from '@/plugins/firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import canvg from 'canvg'
import nanoid from 'nanoid'
const db = firebase.firestore()
const generated = db.collection('generated')
export const state = () => ({
    ramen: '',
    generatedImageUrl: ''
})

export const mutations = {
    changeGeneratedImageUrl ({ state }, imageUrl) {
        state.generatedImageUrl = imageUrl
    }
}

export const actions = {
    async onGenerated ({ state, commit, dispatch }, payload) {
        const refs = payload.refs
        const image = await dispatch('createImage', refs)
        await dispatch('saveImage', image)
    },

    async createImage ({ state, commit, dispatch }, refs) {
        const canvas = document.createElement('canvas')
        canvas.width = refs.width.baseVal.value;
        canvas.height = refs.height.baseVal.value;

        // SVG → Canvas 変換
        const data = new XMLSerializer().serializeToString(refs);
        canvg(canvas, data)

        // imageURLを返す
        return canvas.toDataURL('image/png').split(',')[1]
    },

    async saveImage ({}, image) {
        const id = nanoid()
        const storageRef = firebase.storage().ref();
        const createRef = storageRef.child(`generate/${id}.png`);

        await createRef.putString(image, 'base64').then((snapshot) => {
            console.log('保存しました');
        });

        const imageUrl = await createRef.getDownloadURL()
        await generated.doc(id).set({
            imageUrl: imageUrl
        })
    },

    async getImageUrl ({ state, commit, dispatch}, payload) {
        let imageUrl
        const id = payload.id
        const ref = await generated.doc(id).get()
        if(ref.exists) {
            imageUrl = await ref.data().imageUrl
        } else {
            console.log('URLないわ')
            imageUrl = ''
        }
        commit('changeGeneratedImageUrl', imageUrl)
    }
}

export const getters = {
    getGeneratedImageUrl (state ) {
        return state.generatedImageUrl
    }
}
