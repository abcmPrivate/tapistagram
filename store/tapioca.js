import Vue from 'vue'

import material from '@/apis/material'

export const state = () => ({
    tapioca: material.tapioca[0],
    drink: material.drink[0],
    foam: material.foam[0],
    cream: material.cream[0],
    mark: {},
    straw: material.straw[0]
})
export const mutations = {
    changeParts (state, payload) {
        const category = payload.category
        const part = payload.part

        console.log(part)

        if (!part.name) {
            state[category] = {
                name: '',
                name_jp: '',
                color: 'transparent'
            }
            return
        }

        state[category] = {
            name: part.name,
            name_jp: part.name_jp,
            color: part.color
        }
    }
}
export const actions = {
    /**
     * パーツ変更するメソッド
     * @param {*} { commit }
     * @param {*} payload category: String, part: name, name_jp, color
     */
    changeParts ({ commit }, payload) {
        commit('changeParts', payload)
    },

    /**
     * マーク変更するメソッド
     * マークのみSVG差し替える？予定
     * @param {*} param0 
     * @param {*} payload 
     */
    changeMark ({ commit }, payload) {

    }
}
export const getters = {
    getTapioca (state) {
        return state.tapioca
    },
    getDrink (state) {
        return state.drink
    },
    getFoam (state) {
        return state.foam
    },
    getCream (state) {
        return state.cream
    },
    getStraw (state) {
        return state.straw
    },
    getName (state) {
        const tapioca = state.tapioca.name_jp
        const drink = state.drink.name_jp

        let foam = state.foam.name_jp
        let cream = state.cream.name_jp
        let topping = ''
        if (foam == 'なし') {
            foam = ''
        }
        if (cream == 'なし') {
            cream = ''
        }
        if (foam || cream) {
            const arr = []
            if(foam) {
                arr.push(foam)
            }
            if(cream) {
                arr.push(cream)
            }
            const to = arr.join('&')
            topping = `with${to}`
        }

        return tapioca + drink + topping
    }
}
