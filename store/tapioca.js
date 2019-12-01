import Vue from 'vue'

export const state = () => ({
    tapioca: {
        name: 'blacksugar',
        name_jp: '黒糖',
        color: '#684535'
    },
    source: {
        name: 'blacksugar',
        name_jp: '黒糖',
        color: '#684535'
    },
    drink: {
        name: 'milktea',
        name_jp: 'ミルクティー',
        color: '#E2C1A3'
    },
    foam: {
        name: 'milk',
        name_jp: 'ミルクフォーム',
        color: '#fffef6'
    },
    mark: {},
    straw: {
        color: '#ed6103'
    }
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
    getSource (state) {
        return state.source
    },
    getDrink (state) {
        return state.drink
    },
    getFoam (state) {
        return state.foam
    },
    getStraw (state) {
        return state.straw
    },
    getName (state) {
        let tapioca = ''
        let source = ''
        const foam = state.foam.name_jp
        if(state.source.name) {
            source = state.source.name_jp + 'ソース'
        }
        if(state.tapioca.name) {
            tapioca = state.tapioca.name_jp + 'タピオカ'
        }
        const drink = state.drink.name_jp

        return tapioca + drink + 'with' + foam + source
    }
}
