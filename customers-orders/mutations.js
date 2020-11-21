import Vue from 'vue'
    export default {
      SET_NEW_CUSTOMERS-ORDER: (state, x) => {
        if (!state[x.id]) return
        Vue.set(state, x.id, {
          ...state[x.id],
          ...x
        })
      }
    }