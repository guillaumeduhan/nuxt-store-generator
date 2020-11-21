const helpers = require('./helpers.js')

module.exports = {
  actions: (storeName) => {
    return `export default {
      CREATE_NEW_${helpers.sing(storeName).toUpperCase()}: ({ commit }, payload) => {
        commit('SET_NEW_${helpers.sing(storeName).toUpperCase()}', payload)
      }
    }`
  },
  getters: (storeName) => {
    return `export default {
      get${helpers.formatToGetters(storeName, false)}: (state) => {
        if (!state) return {}
        return Object.values(state)
      },
      get${helpers.formatToGetters(storeName, true)}ById: (state, ${helpers.formatToGetters(storeName, true, true)}Id) => {
        return state[${helpers.formatToGetters(storeName, true, true)}Id]
      }
    }`
  },
  state: () => {
    return `export function state() { return ({}) }`
  },
  mutations: (storeName) => {
    return `import Vue from 'vue'
    export default {
      SET_NEW_${helpers.sing(storeName).toUpperCase()}: (state, x) => {
        if (!state[x.id]) return
        Vue.set(state, x.id, {
          ...state[x.id],
          ...x
        })
      }
    }`
  }
}