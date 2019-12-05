export const state = () => ({
    tapioca: true,
    drink: false,
    foam: false,
    cream: false,
    straw: false
})
export const mutations = {
    changeView (state, category) {
        state.tapioca = false
        state.drink = false
        state.foam = false
        state.cream = false
        state.straw = false

        state[category] = true
    }
}
export const actions = {
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
    }
}
