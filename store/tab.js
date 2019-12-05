export const state = () => ({
    isActiveCategory: 'tapioca',
    tapioca: true,
    drink: false,
    foam: false,
    cream: false,
    straw: false
})
export const mutations = {
    changeActiveCategory (state, category) {
        state.isActiveCategory = category
        console.log(state.isActiveCategory)
        // state.tapioca = false
        // state.drink = false
        // state.foam = false
        // state.cream = false
        // state.straw = false

        // state[category] = true
    }
}
export const actions = {
}
export const getters = {
    getIsActive (state) {
        return state.isActiveCategory
    }
}
