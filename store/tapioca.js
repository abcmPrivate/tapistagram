import Vue from 'vue'

export const state = () => ({
    tapioca: {
        name: 'blacksugar',
        name_jp: '黒糖',
        color: '#ed6103'
    },
    source: {
        name: 'blacksugar',
        name_jp: '黒糖',
        color: '#'
    },
    drink: {
        name: 'milktea',
        name_jp: 'ミルクティー',
        color: '#'
    },
    foam: {
        name: 'milk',
        name_jp: 'ミルクフォーム',
    },
    mark: {}
})
export const mutations = {
    changeParts (state, payload) {
        const category = payload.category
        const part = payload.part

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
    }
}
