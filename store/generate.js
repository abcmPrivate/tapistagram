import firebase from '@/plugins/firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import canvg from 'canvg'
import nanoid from 'nanoid'
const db = firebase.firestore()
const generated = db.collection('generated')
export const state = () => ({
    ramen: ''
})

export const mutations = {
    addRamen (state, payload) {
        state.ramen = 'ra---'
        console.log(state.ramen)
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
    }
}
