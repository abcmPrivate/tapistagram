import firebase from '@/plugins/firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
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
    async onGenerated ({ state, commit }, payload) {
        const id = payload.id
        const image = payload.imageUrl
        await generated.doc(id).set({
            url: imageUrl
        })
    }
}
